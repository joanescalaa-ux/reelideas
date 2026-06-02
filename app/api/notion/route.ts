import { NextRequest, NextResponse } from 'next/server';
import { createNotionPage } from '@/lib/notion';
import type { ReelIdea, Profile } from '@/types';

export async function POST(req: NextRequest) {
  try {
    const { ideas, profile }: { ideas: ReelIdea[]; profile: Profile } = await req.json();
    const url = await createNotionPage(ideas, profile);
    return NextResponse.json({ url });
  } catch (err) {
    console.error('[notion]', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : String(err) },
      { status: 500 }
    );
  }
}
