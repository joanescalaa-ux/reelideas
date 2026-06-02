#!/usr/bin/env node
// Usage: node create-user.js <email> <password> [nombre]
// Example: node create-user.js joan@escala.io escala2026

const fs = require('fs');
const path = require('path');

// ── Load .env.local ──────────────────────────────────────────────────────────
const envFile = path.join(__dirname, '.env.local');
if (!fs.existsSync(envFile)) {
  console.error('Error: .env.local not found. Run this script from the project root.');
  process.exit(1);
}
for (const line of fs.readFileSync(envFile, 'utf8').split('\n')) {
  const trimmed = line.trim();
  if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
    const [key, ...rest] = trimmed.split('=');
    process.env[key.trim()] = rest.join('=').trim();
  }
}

// ── Args ─────────────────────────────────────────────────────────────────────
const [,, email, password, nombre] = process.argv;
if (!email || !password) {
  console.error('Usage: node create-user.js <email> <password> [nombre]');
  process.exit(1);
}

// ── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  const { hash } = require('bcryptjs');
  const { createClient } = require('@supabase/supabase-js');

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.error('Error: SUPABASE_URL or SUPABASE_SERVICE_KEY missing in .env.local');
    process.exit(1);
  }

  const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const normalizedEmail = email.toLowerCase().trim();

  console.log(`\nCreating user: ${normalizedEmail}`);

  // Check if already exists
  const { data: existing } = await supabase
    .from('reel_users')
    .select('id')
    .eq('email', normalizedEmail)
    .single();

  if (existing) {
    console.error(`Error: A user with email "${normalizedEmail}" already exists.`);
    process.exit(1);
  }

  // Hash password
  process.stdout.write('Hashing password...');
  const passwordHash = await hash(password, 12);
  console.log(' done');

  // Insert
  process.stdout.write('Inserting into Supabase...');
  const { data, error } = await supabase
    .from('reel_users')
    .insert({
      email: normalizedEmail,
      password_hash: passwordHash,
      nombre: nombre?.trim() || null,
    })
    .select('id, email, nombre, created_at')
    .single();

  if (error) {
    console.error('\nSupabase error:', error.message);
    process.exit(1);
  }

  console.log(' done\n');
  console.log('✓ User created successfully:');
  console.log(`  ID:      ${data.id}`);
  console.log(`  Email:   ${data.email}`);
  console.log(`  Nombre:  ${data.nombre ?? '(not set)'}`);
  console.log(`  Created: ${data.created_at}\n`);
}

main().catch(err => {
  console.error('Unexpected error:', err.message);
  process.exit(1);
});
