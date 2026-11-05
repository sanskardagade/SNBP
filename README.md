# SNBP University Website Clone

Full-stack clone inspired by [SNBP University](https://snbpuniversity.com/) — **React (Vite + Tailwind)** frontend and **Express** API backend.

## Project structure (company-style layout)

```
snbp-university-clone/
├── backend/
│   └── src/
│       ├── config/          # env and app configuration
│       ├── controllers/     # request handlers
│       ├── data/            # static site content (replace with CMS/DB later)
│       ├── middleware/      # error handling, etc.
│       ├── routes/          # route modules
│       ├── services/        # in-memory stores (demo)
│       ├── validators/      # request validation
│       ├── app.js           # Express app factory
│       └── server.js        # entry point
└── frontend/
    └── src/
        ├── components/
        │   ├── common/      # reusable UI (SectionHeading, Accordion, …)
        │   ├── home/        # homepage sections
        │   └── layout/      # Navbar, Footer, EnquireBar
        ├── constants/       # navigation links
        ├── hooks/           # data-fetch hooks
        ├── pages/           # route pages
        ├── services/        # API client
        └── styles/          # global CSS + Tailwind
```

## Requirements

- Node.js 20+
- npm

## Run locally

**Terminal 1 — API**

```bash
cd backend
npm install
npm run dev
```

API: `http://localhost:5000`

**Terminal 2 — UI**

```bash
cd frontend
npm install
npm run dev
```

UI: `http://localhost:5173` (proxies `/api` to the backend)

## API

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/home` | Full homepage payload |
| GET | `/api/programs` | Program cards |
| GET | `/api/schools` | Schools and courses |
| GET | `/api/news` | News highlights |
| GET | `/api/faqs` | FAQ list |
| GET | `/api/assistant/status` | Reports whether an AI provider key is configured |
| POST | `/api/assistant` | Grounded assistant response or published-FAQ fallback |
| POST | `/api/contact` | Contact form |
| POST | `/api/admissions` | Admission enquiry |
| POST | `/api/newsletter` | Email subscribe |

## Environment (optional)

`backend/.env`:

```env
PORT=5000
CLIENT_ORIGIN=http://localhost:5173
AI_API_KEY=
AI_BASE_URL=https://api.openai.com/v1
AI_MODEL=gpt-4o-mini
```

The assistant accepts an OpenAI-compatible chat-completions endpoint. Keep `AI_API_KEY` only in the backend environment; leave it blank to serve exact published FAQ answers and a contact fallback. Configure a provider and verify a successful response before treating AI answers as available. Requests are rate-limited, bounded in size, and not stored.

## Notes

- This is a **learning/demo clone**, not an official SNBP site. Use your own licensed images and copy for production.
- Form submissions are stored **in memory** until you connect a database.
- Match branding and content against the live site as you iterate.
