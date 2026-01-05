````md
# Eneba-like Game Listing

Small project: Eneba-style game listing UI (React + Vite) with a Node/Express backend and SQLite database.

## Features
- Responsive grid of game cards
- Search by title (debounce)
- Loading skeleton + no results
- Hover effects + clickable cards
- Game details page: `/game.html?id=...`
- Price sorting (Default / Price ↑ / Price ↓)

## Tech Stack
- Frontend: React + Vite
- Backend: Node.js + Express
- Database: SQLite

## How to run

### Backend (port 5174)
```bash
npm install
node index.js
```

Check:

* [http://localhost:5174/health](http://localhost:5174/health)
* [http://localhost:5174/list](http://localhost:5174/list)

### Frontend (port 5173)

```bash
npm install
npm run dev
```

Open:

* [http://localhost:5173](http://localhost:5173)

## Pages

* `/` — list + search + sort
* `/game.html?id=1` — details page

## API

* `GET /health`
* `GET /list?search=...`
* `GET /api/games/:id`

## AI usage

Prompts used are documented in `AI_PROMPT_HISTORY.md`.
