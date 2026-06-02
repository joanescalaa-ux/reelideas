import { NextRequest, NextResponse } from 'next/server';
import { hash } from 'bcryptjs';
import { getSupabase } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password, nombre } = body;

    console.log('[register] body received:', { email, nombre, passwordLength: password?.length });

    if (!email || !password) {
      return NextResponse.json({ error: 'Email y contraseña son obligatorios' }, { status: 400 });
    }

    if (password.length < 8) {
      return NextResponse.json(
        { error: 'La contraseña debe tener al menos 8 caracteres' },
        { status: 400 }
      );
    }

    const supabase = getSupabase();
    const normalizedEmail = email.toLowerCase().trim();

    console.log('[register] checking existing user for email:', normalizedEmail);
    const { data: existing, error: selectError } = await supabase
      .from('reel_users')
      .select('id')
      .eq('email', normalizedEmail)
      .single();

    console.log('[register] existing check:', { found: !!existing, selectError: selectError?.code });

    if (existing) {
      return NextResponse.json({ error: 'Este email ya está registrado' }, { status: 409 });
    }

    const passwordHash = await hash(password, 12);
    console.log('[register] hash generated, prefix:', passwordHash.slice(0, 10));

    const { data: inserted, error: insertError } = await supabase
      .from('reel_users')
      .insert({ email: normalizedEmail, password_hash: passwordHash, nombre: nombre?.trim() || null })
      .select('id, email')
      .single();

    console.log('[register] insert result:', { inserted, insertError: insertError?.message, code: insertError?.code });

    if (insertError) {
      return NextResponse.json({ error: 'Error al crear la cuenta: ' + insertError.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true, email: normalizedEmail });
  } catch (err) {
    console.error('[register] unexpected error:', err);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
