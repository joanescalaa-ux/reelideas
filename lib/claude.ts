import Anthropic from '@anthropic-ai/sdk';
import type { Profile, ScrapedPost, ReelIdea } from '@/types';

const SYSTEM_PROMPT = `Eres un estratega de contenido para creadores de infoproductos en Instagram.`;

function buildPrompt(profile: Profile, posts: ScrapedPost[]): string {
  const postsText =
    posts.length > 0
      ? posts
          .map(
            p =>
              `${p.username} | ${p.caption.slice(0, 300)} | ${p.likesCount} likes | ${p.commentsCount} comentarios`
          )
          .join('\n')
      : '(No se encontraron posts — genera ideas basadas únicamente en el nicho y perfil del cliente)';

  return `PERFIL DEL CLIENTE:
- Nicho: ${profile.nicho}
- A quién ayuda: ${profile.icp}
- Resultado que ofrece: ${profile.resultado}
- Tono: ${profile.tono}

POSTS CON MÁS ENGAGEMENT DE COMPETIDORES:
${postsText}

Tu tarea: genera exactamente 10 ideas de Reel originales para este cliente.
Inspírate en los temas y formatos que funcionan en su nicho, pero adapta cada idea
al ICP y resultado de este cliente. No copies, transforma.

Devuelve SOLO un JSON array con este formato exacto, sin texto adicional:
[{
  "hook": "primera frase de apertura (máx 12 palabras)",
  "estructura": ["paso 1", "paso 2", "paso 3"],
  "cta": "llamada a la acción final",
  "formato": "educativo | historia | listicle | contrarian | caso real",
  "por_que_funciona": "una frase explicando el ángulo"
}]`;
}

export async function generateIdeas(profile: Profile, posts: ScrapedPost[]): Promise<ReelIdea[]> {
  console.log('API KEY prefix:', process.env.ANTHROPIC_API_KEY?.substring(0, 15))
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error('ANTHROPIC_API_KEY not configured');

  const client = new Anthropic({ apiKey });

  const message = await client.messages.create({
    model: 'claude-sonnet-4-5',
    max_tokens: 4096,
    system: SYSTEM_PROMPT,
    messages: [{ role: 'user', content: buildPrompt(profile, posts) }],
  });

  const block = message.content[0];
  if (block.type !== 'text') throw new Error('Unexpected Claude response type');

  const match = block.text.match(/\[[\s\S]*\]/);
  if (!match) throw new Error('No JSON array found in Claude response');

  return JSON.parse(match[0]) as ReelIdea[];
}
