import { NextRequest, NextResponse } from 'next/server';
import { scrapeInstagram } from '@/lib/apify';

export const maxDuration = 300;

export async function POST(req: NextRequest) {
  try {
    const { usernames } = await req.json();
    const posts = await scrapeInstagram(usernames);
    return NextResponse.json({ posts });
  } catch (err) {
    console.error('[scrape]', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : String(err), posts: [] },
      { status: 500 }
    );
  }
}
