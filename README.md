# Generador de Ideas para Reels

Analiza los posts de mayor engagement de tus competidores en Instagram y genera 10 ideas de Reels originales usando Claude. Las ideas se guardan automáticamente en Notion.

## Stack

- **Next.js 15** (App Router)
- **Tailwind CSS**
- **Apify** — scraping de Instagram
- **Claude Sonnet** (Anthropic) — generación de ideas
- **Notion API** — creación de páginas

## Setup local

### 1. Instalar dependencias

```bash
cd reel-ideas
npm install
```

### 2. Configurar variables de entorno

```bash
cp .env.local.example .env.local
```

Edita `.env.local` con tus claves:

| Variable | Dónde obtenerla |
|----------|----------------|
| `ANTHROPIC_API_KEY` | [console.anthropic.com](https://console.anthropic.com) |
| `APIFY_API_TOKEN` | [console.apify.com/account/integrations](https://console.apify.com/account/integrations) |
| `NOTION_API_KEY` | [notion.so/my-integrations](https://www.notion.so/my-integrations) → crear integración |
| `NOTION_DATABASE_ID` | Ver instrucciones abajo |

### 3. Configurar Notion

1. Crea una **base de datos** (tabla) en Notion con al menos la propiedad `Name` (título).
2. Ve a [notion.so/my-integrations](https://www.notion.so/my-integrations) → **Nueva integración** → copia el `Internal Integration Secret` como `NOTION_API_KEY`.
3. En tu base de datos de Notion → `···` → **Connections** → añade tu integración.
4. Copia el ID de la base de datos: abre la BD en el navegador, la URL tiene el formato `https://www.notion.so/{workspace}/{DATABASE_ID}?v=...` → usa ese UUID como `NOTION_DATABASE_ID`.

### 4. Arrancar en desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Despliegue en Vercel

```bash
npm i -g vercel
vercel
```

Añade las 4 variables de entorno en el panel de Vercel → **Settings → Environment Variables**.

> **Importante:** El scraping de Instagram puede tardar 2-5 minutos. Los API Routes tienen `maxDuration = 300` configurado, lo que requiere el **plan Pro de Vercel**. En el plan Hobby (timeout de 60s) el scraping puede fallar; en ese caso la app continúa y genera las ideas sin datos de competidores.

## Flujo de la aplicación

```
Usuario envía formulario
        │
        ▼
/api/generate
  ├─ lib/apify.ts  →  Inicia actor apify/instagram-scraper
  │                    Hace polling hasta SUCCEEDED (máx 5 min)
  │                    Filtra top 10 posts por engagement
  │
  ├─ lib/claude.ts →  Llama a claude-sonnet con el prompt y los posts
  │                    Parsea el JSON array de 10 ideas
  │
  └─ lib/notion.ts →  Crea página en la BD con tabla resumen
                       + toggles de estructura por idea
```

## Estructura del proyecto

```
app/
  page.tsx               UI principal (formulario + resultados)
  layout.tsx
  globals.css
  api/
    generate/route.ts    Orquesta scrape → Claude → Notion
    scrape/route.ts      Endpoint standalone de Apify
    notion/route.ts      Endpoint standalone de Notion
lib/
  apify.ts               Lógica de scraping
  claude.ts              Llamada a Claude API
  notion.ts              Creación de página en Notion
types/
  index.ts               Tipos compartidos
```
