import type { ScrapedPost } from '@/types';

const APIFY_BASE = 'https://api.apify.com/v2';
const ACTOR_ID = 'apify~instagram-scraper';

export async function scrapeInstagram(usernames: string[]): Promise<ScrapedPost[]> {
  const token = process.env.APIFY_API_TOKEN;
  if (!token) throw new Error('APIFY_API_TOKEN not configured');

  const clean = usernames.map(u => u.trim().replace(/^@/, '')).filter(Boolean).slice(0, 5);
  if (clean.length === 0) return [];

  const directUrls = clean.map(u => `https://www.instagram.com/${u}/`);

  const startRes = await fetch(`${APIFY_BASE}/acts/${ACTOR_ID}/runs?token=${token}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      directUrls,
      resultsType: 'posts',
      resultsLimit: 20,
      addParentData: false,
    }),
  });

  if (!startRes.ok) throw new Error(`Apify start failed: ${await startRes.text()}`);

  const { data: run } = await startRes.json();
  let status: string = run.status;
  const runId: string = run.id;
  const datasetId: string = run.defaultDatasetId;

  // Poll up to 5 minutes
  for (let i = 0; i < 60 && ['RUNNING', 'READY'].includes(status); i++) {
    await new Promise(r => setTimeout(r, 5000));
    const res = await fetch(`${APIFY_BASE}/actor-runs/${runId}?token=${token}`);
    if (res.ok) ({ data: { status } } = await res.json());
  }

  if (status !== 'SUCCEEDED') throw new Error(`Apify run ended with status: ${status}`);

  const itemsRes = await fetch(`${APIFY_BASE}/datasets/${datasetId}/items?token=${token}&limit=200`);
  if (!itemsRes.ok) throw new Error('Failed to fetch dataset items');

  const items: any[] = await itemsRes.json();

  return items
    .filter(item => item.caption && typeof item.likesCount === 'number')
    .map(
      (item): ScrapedPost => ({
        username: item.ownerUsername || '',
        caption: String(item.caption || '').slice(0, 500),
        likesCount: item.likesCount || 0,
        commentsCount: item.commentsCount || 0,
        timestamp: item.timestamp || '',
      })
    )
    .sort((a, b) => b.likesCount + b.commentsCount - (a.likesCount + a.commentsCount))
    .slice(0, 10);
}
