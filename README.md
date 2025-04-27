# 🎬 Sueraphql Fullstack

A fullstack web application that displays movie information, built with Apollo Server (Node.js) and React.  
Designed for quick browsing and exploration of movies through a smooth user experience.

---

## 😎 Repositories

- Frontend repositories: https://github.com/feelsuegood/sueraphql-frontend
- Backend repositories: https://github.com/feelsuegood/sueraphql-backend

---

## 📂 Project Structure

```
sueraphql-fullstack/
├── frontend/   # React frontend
├── bakcend/   # Apollo GraphQL server
├── docker-compose.yml
├── docker-compose.dev.yml
└── README.md
```

---

## 🚀 Features

### Frontend (React)

- Browse a list of popular movies
- View detailed movie information
- "Like" a movie (saved only in local cache)
- Responsive and modern UI
- React Router for navigation

### Backend (Node.js + Apollo)

- GraphQL API for movies and users
- Fetch movie data from external API ([YTS API](https://yts.mx/api))
- Support for querying single movie or movie list
- Mutations for posting and deleting tweets (sample feature)

---

## ⚙️ Technologies Used

- **Frontend**: React, Apollo Client, Styled-Components
- **Backend**: Node.js, Apollo Server, GraphQL
- **Docker**: Docker & Docker Compose for environment management

---

## 🐳 How to Run with Docker

### 1. Development Mode (Auto reload)

```bash
docker compose -f docker-compose.dev.yml up --build
```

- React frontend runs at: http://localhost:3000
- Apollo backend runs at: http://localhost:4000

### 2. Production Mode

```bash
docker compose up --build
```

---

## 📜 Scripts

| Location  | Command         | Description                        |
| --------- | --------------- | ---------------------------------- |
| backend/  | `npm run dev`   | Start server with nodemon          |
| backend/  | `npm start`     | Start server normally              |
| frontend/ | `npm start`     | Start client normally (dev server) |
| frontend/ | `npm run build` | Build production-ready client      |
