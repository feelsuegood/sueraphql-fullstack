# 🎬 Sueraphql Fullstack

A fullstack web application that displays movie information, built with Apollo Server (Node.js) and React.  
Designed for quick browsing and exploration of movies through a smooth user experience.

---

## 😎 Repositories

- Client repositories: https://github.com/feelsuegood/sueraphql-client
- Server repositores: https://github.com/feelsuegood/sueraphql-server

---

## 📂 Project Structure

```
sueraphql-fullstack/
├── client/   # React frontend
├── server/   # Apollo GraphQL server
├── docker-compose.yml
├── docker-compose.dev.yml
└── README.md
```

---

## 🚀 Features

### Client (React)

- Browse a list of popular movies
- View detailed movie information
- "Like" a movie (saved only in local cache)
- Responsive and modern UI
- React Router for navigation

### Server (Node.js + Apollo)

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

- React client runs at: http://localhost:3000
- Apollo server runs at: http://localhost:4000

### 2. Production Mode

```bash
docker compose up --build
```

---

## 📜 Scripts

| Location | Command         | Description                        |
| -------- | --------------- | ---------------------------------- |
| server/  | `npm run dev`   | Start server with nodemon          |
| server/  | `npm start`     | Start server normally              |
| client/  | `npm start`     | Start client normally (dev server) |
| client/  | `npm run build` | Build production-ready client      |
