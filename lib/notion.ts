import { Client } from '@notionhq/client';
import type { Profile, ReelIdea } from '@/types';

type RichText = { type: 'text'; text: { content: string } };

function rt(content: string): RichText[] {
  return [{ type: 'text', text: { content: content.slice(0, 2000) } }];
}

export async function createNotionPage(ideas: ReelIdea[], profile: Profile): Promise<string | null> {
  const apiKey = process.env.NOTION_API_KEY;
  const databaseId = process.env.NOTION_DATABASE_ID;
  if (!apiKey || !databaseId) return null;

  const notion = new Client({ auth: apiKey });

  const date = new Date().toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  const tableRows = [
    {
      type: 'table_row' as const,
      table_row: { cells: [rt('Hook'), rt('Formato'), rt('CTA'), rt('Por qué funciona')] },
    },
    ...ideas.map(idea => ({
      type: 'table_row' as const,
      table_row: {
        cells: [rt(idea.hook), rt(idea.formato), rt(idea.cta), rt(idea.por_que_funciona)],
      },
    })),
  ];

  const toggleBlocks = ideas.map((idea, i) => ({
    type: 'toggle' as const,
    toggle: {
      rich_text: [
        {
          type: 'text' as const,
          text: { content: `${i + 1}. ${idea.hook}` },
          annotations: {
            bold: true,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default' as const,
          },
        },
      ],
      children: idea.estructura.map(paso => ({
        type: 'bulleted_list_item' as const,
        bulleted_list_item: { rich_text: rt(paso) },
      })),
    },
  }));

  const page = await notion.pages.create({
    parent: { database_id: databaseId },
    properties: {
      title: { title: rt(`Ideas Reels — ${date} — ${profile.nicho}`) },
    },
    children: [
      {
        type: 'heading_2',
        heading_2: { rich_text: rt('Resumen de ideas'), color: 'default', is_toggleable: false },
      },
      {
        type: 'table',
        table: {
          table_width: 4,
          has_column_header: true,
          has_row_header: false,
          children: tableRows,
        },
      } as any,
      { type: 'divider', divider: {} },
      {
        type: 'heading_2',
        heading_2: {
          rich_text: rt('Estructuras detalladas'),
          color: 'default',
          is_toggleable: false,
        },
      },
      ...toggleBlocks,
    ] as any,
  });

  return ((page as any).url as string | undefined) ?? `https://notion.so/${page.id.replace(/-/g, '')}`;
}
