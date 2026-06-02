'use client';

import { useState, useEffect, useRef } from 'react';
import { useSession, signOut } from 'next-auth/react';
import type { Profile, ReelIdea } from '@/types';

const FORMAT_BADGE: Record<string, string> = {
  educativo: 'bg-blue-100 text-blue-700 border-blue-200',
  historia: 'bg-purple-100 text-purple-700 border-purple-200',
  listicle: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  contrarian: 'bg-red-100 text-red-700 border-red-200',
  'caso real': 'bg-amber-100 text-amber-700 border-amber-200',
};

const STEPS = [
  { label: 'Scrapeando Instagram...' },
  { label: 'Analizando con Claude...' },
  { label: 'Guardando en Notion...' },
  { label: '¡Listo!' },
];

const STEP_DURATIONS = [70_000, 20_000, 8_000];

const EMPTY_PROFILE: Profile = { nicho: '', icp: '', resultado: '', tono: '' };

const PROFILE_FIELDS: { key: keyof Profile; label: string; placeholder: string }[] = [
  { key: 'nicho', label: 'Nicho', placeholder: 'ej: finanzas personales, fitness, marketing digital' },
  {
    key: 'icp',
    label: 'A quién ayudas',
    placeholder: 'ej: mujeres 30-45 que quieren independencia económica',
  },
  {
    key: 'resultado',
    label: 'Resultado que ofreces',
    placeholder: 'ej: ganar 2.000€/mes vendiendo infoproductos',
  },
  {
    key: 'tono',
    label: 'Tono de comunicación',
    placeholder: 'ej: cercano y directo, motivacional, experto sin tecnicismos',
  },
];

export default function Home() {
  const { data: session, status } = useSession();

  const [profile, setProfile] = useState<Profile>(EMPTY_PROFILE);
  const [profileLoading, setProfileLoading] = useState(true);
  const [usernames, setUsernames] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [ideas, setIdeas] = useState<ReelIdea[]>([]);
  const [notionUrl, setNotionUrl] = useState<string | null>(null);
  const [postsFound, setPostsFound] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<Set<number>>(new Set());
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Load profile from Supabase when session is ready
  useEffect(() => {
    if (status !== 'authenticated') return;
    setProfileLoading(true);
    fetch('/api/profile')
      .then(r => r.json())
      .then(data => {
        if (data && !data.error) {
          setProfile({
            nicho: data.nicho ?? '',
            icp: data.icp ?? '',
            resultado: data.resultado ?? '',
            tono: data.tono ?? '',
          });
        }
      })
      .catch(console.error)
      .finally(() => setProfileLoading(false));
  }, [status]);

  async function saveProfile() {
    setSaving(true);
    setSaved(false);
    try {
      await fetch('/api/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profile),
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } finally {
      setSaving(false);
    }
  }

  function startStepTimer(idx: number) {
    if (idx >= STEP_DURATIONS.length) return;
    timerRef.current = setTimeout(() => {
      const next = idx + 1;
      setStepIndex(next);
      startStepTimer(next);
    }, STEP_DURATIONS[idx]);
  }

  function stopTimer() {
    if (timerRef.current) clearTimeout(timerRef.current);
  }

  async function handleGenerate() {
    setError(null);
    setIdeas([]);
    setNotionUrl(null);
    setPostsFound(null);
    setExpanded(new Set());
    setIsLoading(true);
    setStepIndex(0);
    startStepTimer(0);

    const usernameList = usernames
      .split('\n')
      .map(u => u.trim())
      .filter(Boolean)
      .slice(0, 5);

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ profile, usernames: usernameList }),
      });

      const data = await res.json();
      if (!res.ok || data.error) throw new Error(data.error || 'Error al generar ideas');

      setIdeas(data.ideas ?? []);
      setNotionUrl(data.notionUrl ?? null);
      setPostsFound(data.postsFound ?? 0);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      stopTimer();
      setStepIndex(3);
      setIsLoading(false);
    }
  }

  function toggleCard(i: number) {
    setExpanded(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  }

  const canGenerate = !isLoading && profile.nicho.trim() !== '' && usernames.trim() !== '';
  const displayName = session?.user?.name || session?.user?.email || '';

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🎬</span>
            <div>
              <h1 className="text-xl font-bold text-slate-900 leading-none">
                Generador de Ideas para Reels
              </h1>
              <p className="text-sm text-slate-500 mt-0.5 hidden sm:block">
                Analiza a tu competencia y genera 10 ideas originales con IA
              </p>
            </div>
          </div>

          {/* User info + logout */}
          <div className="flex items-center gap-3 shrink-0">
            {displayName && (
              <span className="hidden sm:block text-sm text-slate-600 truncate max-w-[180px]">
                {displayName}
              </span>
            )}
            <button
              onClick={() => signOut({ callbackUrl: '/login' })}
              className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-8 space-y-6">
        {/* Form grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Profile section */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="font-semibold text-slate-800">Tu perfil de creador</h2>
              <button
                onClick={saveProfile}
                disabled={saving}
                className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-100 disabled:cursor-not-allowed transition-colors min-w-[100px] text-center"
              >
                {saving ? 'Guardando...' : saved ? '✓ Guardado' : 'Guardar perfil'}
              </button>
            </div>

            {profileLoading ? (
              <div className="space-y-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="space-y-1.5">
                    <div className="h-3 w-20 rounded bg-slate-100 animate-pulse" />
                    <div className="h-9 rounded-xl bg-slate-100 animate-pulse" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {PROFILE_FIELDS.map(({ key, label, placeholder }) => (
                  <div key={key}>
                    <label className="mb-1 block text-xs font-medium text-slate-600">{label}</label>
                    <input
                      type="text"
                      value={profile[key]}
                      onChange={e => setProfile(prev => ({ ...prev, [key]: e.target.value }))}
                      placeholder={placeholder}
                      className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-100"
                    />
                  </div>
                ))}
              </div>
            )}

            <p className="mt-4 text-xs text-slate-400">
              El perfil se guarda en tu cuenta y se cargará automáticamente la próxima vez.
            </p>
          </div>

          {/* Competitors section */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col">
            <h2 className="mb-1 font-semibold text-slate-800">Competidores a analizar</h2>
            <p className="mb-4 text-xs text-slate-500">Hasta 5 cuentas — scrapeamos sus últimos 20 posts</p>
            <textarea
              value={usernames}
              onChange={e => setUsernames(e.target.value)}
              placeholder={'@username1\n@username2\n@username3'}
              rows={7}
              className="w-full flex-1 resize-none rounded-xl border border-slate-200 px-3 py-2 font-mono text-sm text-slate-900 placeholder-slate-400 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-100"
            />
            <p className="mt-1 text-xs text-slate-400">El @ es opcional. Un username por línea.</p>

            <div className="mt-5 pt-5 border-t border-slate-100">
              <button
                onClick={handleGenerate}
                disabled={!canGenerate}
                className="w-full rounded-xl bg-violet-600 py-3 px-4 text-sm font-semibold text-white shadow-sm hover:bg-violet-700 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400 transition-colors"
              >
                {isLoading ? 'Generando...' : '✨ Generar 10 ideas de Reel'}
              </button>
              {!profile.nicho && !profileLoading && (
                <p className="mt-2 text-center text-xs text-slate-400">
                  Rellena al menos el campo &ldquo;Nicho&rdquo; para continuar
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Loading state */}
        {isLoading && (
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col items-center gap-5">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-violet-600 border-t-transparent" />
              <div className="space-y-2 text-center">
                {STEPS.map((step, i) => (
                  <p
                    key={i}
                    className={`text-sm transition-all duration-300 ${
                      i === stepIndex
                        ? 'font-semibold text-violet-600'
                        : i < stepIndex
                        ? 'text-slate-300 line-through'
                        : 'text-slate-300'
                    }`}
                  >
                    {i < stepIndex ? '✓ ' : i === stepIndex ? '› ' : '  '}
                    {step.label}
                  </p>
                ))}
              </div>
              <p className="text-xs text-slate-400">
                El scraping puede tardar 1-2 minutos dependiendo del número de cuentas
              </p>
            </div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            <span className="font-medium">Error: </span>
            {error}
          </div>
        )}

        {/* Results */}
        {ideas.length > 0 && (
          <section>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-lg font-bold text-slate-900">10 ideas generadas</h2>
                {postsFound !== null && (
                  <p className="text-xs text-slate-500 mt-0.5">
                    Inspiradas en {postsFound} posts de competidores analizados
                  </p>
                )}
              </div>
              {notionUrl ? (
                <a
                  href={notionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="opacity-70">
                    <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" />
                  </svg>
                  Ver en Notion
                </a>
              ) : (
                <span className="text-xs text-slate-400">(Notion no configurado o falló)</span>
              )}
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {ideas.map((idea, i) => (
                <div
                  key={i}
                  className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-300">#{i + 1}</span>
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-xs font-medium capitalize ${
                        FORMAT_BADGE[idea.formato] ?? 'bg-slate-100 text-slate-600 border-slate-200'
                      }`}
                    >
                      {idea.formato}
                    </span>
                  </div>

                  <p className="mb-2 text-base font-bold leading-snug text-slate-900">
                    &ldquo;{idea.hook}&rdquo;
                  </p>

                  <p className="mb-4 text-xs italic text-slate-500 leading-relaxed">
                    {idea.por_que_funciona}
                  </p>

                  <div className="mt-auto border-t border-slate-100 pt-3 space-y-2">
                    <p className="text-xs text-slate-600">
                      <span className="font-medium">CTA:</span>{' '}
                      <span className="text-violet-600">{idea.cta}</span>
                    </p>

                    <button
                      onClick={() => toggleCard(i)}
                      className="flex w-full items-center gap-1.5 text-left text-xs text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      <svg
                        className={`h-3 w-3 transition-transform duration-200 ${expanded.has(i) ? 'rotate-90' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      Estructura del Reel
                    </button>

                    {expanded.has(i) && (
                      <div className="space-y-1.5 pt-1">
                        {idea.estructura.map((paso, j) => (
                          <div key={j} className="flex gap-2 text-xs text-slate-600">
                            <span className="shrink-0 font-bold text-violet-400">{j + 1}.</span>
                            <span>{paso}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
