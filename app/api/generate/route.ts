import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { scrapeInstagram } from '@/lib/apify';
import { generateIdeas } from '@/lib/claude';
import { createNotionPage } from '@/lib/notion';
import type { GenerateRequest, ReelIdea } from '@/types';

export const maxDuration = 300;

const DEV_IDEAS: ReelIdea[] = [
  {
    hook: 'El error que cometen el 90% de creadores al empezar',
    estructura: ['Presenta el error común con un ejemplo real', 'Explica por qué destruye los resultados', 'Da la solución en 3 pasos accionables'],
    cta: 'Guarda este video para no repetirlo',
    formato: 'educativo',
    por_que_funciona: 'El miedo a cometer errores genera alta retención desde el primer segundo',
  },
  {
    hook: 'Cómo pasé de 0 a 2.000€/mes en 90 días',
    estructura: ['El punto de partida real (sin exagerar)', 'Las 3 decisiones clave que lo cambiaron todo', 'Lo que harías diferente si empezaras hoy'],
    cta: 'Escríbeme "método" y te cuento el primer paso',
    formato: 'historia',
    por_que_funciona: 'La transformación con timeline concreto es el formato más compartido en nichos de negocio',
  },
  {
    hook: '5 herramientas que uso cada día y cuestan menos de 30€',
    estructura: ['Herramienta 1-2: productividad base', 'Herramienta 3-4: ventas y captación', 'Herramienta 5: la que nadie conoce'],
    cta: 'Sigue para más recursos como este',
    formato: 'listicle',
    por_que_funciona: 'Los listicles con precio concreto tienen CTR un 40% mayor que sin precio',
  },
  {
    hook: 'Por qué los cursos online NO te harán ganar dinero',
    estructura: ['La promesa falsa que vende la industria', 'Qué falla realmente (y datos que lo demuestran)', 'Qué funciona en su lugar'],
    cta: 'Comenta "de acuerdo" si has vivido esto',
    formato: 'contrarian',
    por_que_funciona: 'Las opiniones contrarias al nicho generan debate y alcance orgánico 3x superior',
  },
  {
    hook: 'Mi cliente ganó 4.500€ en su primera semana. Así lo hicimos',
    estructura: ['Situación inicial del cliente (relatable)', 'Estrategia exacta aplicada paso a paso', 'Resultado y qué se puede replicar'],
    cta: 'Si quieres resultados similares, enlace en bio',
    formato: 'caso real',
    por_que_funciona: 'Los casos reales con números específicos multiplican la credibilidad y las consultas',
  },
  {
    hook: 'La rutina de mañana que me genera ventas antes del desayuno',
    estructura: ['Los 15 minutos que lo cambian todo', 'Qué publico y en qué orden', 'Cómo automatizo el resto del día'],
    cta: 'Guarda esto y aplícalo mañana',
    formato: 'educativo',
    por_que_funciona: 'Las rutinas matutinas apelan a la identidad del emprendedor y generan saves masivos',
  },
  {
    hook: 'Nadie te dice esto cuando empiezas a vender online',
    estructura: ['La realidad cruda del primer mes', 'El momento en que todo cambia', 'Las 2 cosas que separan a los que lo logran'],
    cta: 'Sígueme si quieres la versión sin filtros',
    formato: 'historia',
    por_que_funciona: 'La vulnerabilidad auténtica en nichos de negocio genera confianza y seguidores fieles',
  },
  {
    hook: '3 preguntas que hago antes de crear cualquier infoproducto',
    estructura: ['Pregunta 1: ¿alguien lo pagaría mañana?', 'Pregunta 2: ¿puedo entregarlo en 30 días?', 'Pregunta 3: ¿me posiciona como experto?'],
    cta: 'Respóndelas en comentarios antes de tu próximo lanzamiento',
    formato: 'listicle',
    por_que_funciona: 'Las preguntas accionables invitan a participar y el algoritmo premia la interacción',
  },
  {
    hook: 'Trabajar más horas no es la solución. Esto sí lo es',
    estructura: ['El mito de la productividad por horas', 'El sistema de bloques que uso yo', 'Cómo duplicar resultados trabajando menos'],
    cta: 'Comparte con alguien que necesite escuchar esto',
    formato: 'contrarian',
    por_que_funciona: 'Ir en contra del "trabaja más" conecta emocionalmente con audiencias quemadas',
  },
  {
    hook: 'Copié esta estrategia de los grandes y funcionó igual',
    estructura: ['La estrategia original de [referente del nicho]', 'Cómo la adapté a mi escala y presupuesto', 'Resultados en 30 días con métricas reales'],
    cta: 'Pruébalo 7 días y cuéntame en comentarios',
    formato: 'caso real',
    por_que_funciona: 'Asociarse a referentes conocidos da autoridad instantánea y el "yo también puedo" dispara las guardadas',
  },
];

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  try {
    const { profile, usernames }: GenerateRequest = await req.json();

    if (!profile.nicho) {
      return NextResponse.json({ error: 'El campo nicho es obligatorio' }, { status: 400 });
    }

    // Dev mode: return hardcoded ideas when ANTHROPIC_API_KEY is not set
    if (!process.env.ANTHROPIC_API_KEY) {
      console.log('[generate] DEV MODE — ANTHROPIC_API_KEY not set, returning hardcoded ideas');
      return NextResponse.json({ ideas: DEV_IDEAS, postsFound: 0, devMode: true });
    }

    // Step 1: Scrape competitors
    let posts: Awaited<ReturnType<typeof scrapeInstagram>> = [];
    try {
      posts = await scrapeInstagram(usernames);
    } catch (err) {
      console.error('[scrape] failed, continuing with empty posts:', err);
    }

    // Step 2: Generate ideas with Claude
    const ideas = await generateIdeas(profile, posts);

    // Step 3: Save to Notion (optional — skipped if env vars not set)
    let notionUrl: string | null = null;
    try {
      notionUrl = await createNotionPage(ideas, profile);
    } catch (err) {
      console.error('[notion] failed, returning ideas without Notion link:', err);
    }

    return NextResponse.json({ ideas, notionUrl, postsFound: posts.length });
  } catch (err) {
    console.error('[generate]', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : String(err) },
      { status: 500 }
    );
  }
}
