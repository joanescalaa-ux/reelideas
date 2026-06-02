import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { getSupabase } from '@/lib/supabase';

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  const supabase = getSupabase();
  const { data, error } = await supabase
    .from('reel_users')
    .select('nombre, nicho, icp, resultado, tono')
    .eq('id', session.user.id)
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data ?? {});
}

export async function PUT(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  const { nicho, icp, resultado, tono } = await req.json();
  const supabase = getSupabase();

  const { error } = await supabase
    .from('reel_users')
    .update({ nicho, icp, resultado, tono })
    .eq('id', session.user.id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
