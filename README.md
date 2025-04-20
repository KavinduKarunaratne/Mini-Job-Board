# Mini Job Board

A minimalistic, full-stack job board application built with Next.js, TypeScript, and Prisma.  
This project serves as a foundational platform for posting and browsing job listings, ideal for learning and extending into a more feature-rich application.

## Features

- Server-side rendered pages using Next.js App Router
- Type-safe backend powered by TypeScript and Prisma ORM
- Modern styling with Tailwind CSS

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/KavinduKarunaratne/Mini-Job-Board.git
   cd Mini-Job-Board
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Setup .env file

   ```bash
   DATABASE_URL="postgresql://username:password@localhost:5432/dbname"
   SESSION_SECRET="<Enter your secret>"
   ```

4. Setup database

   ```bash
   npx prisma db push
   ```

5. Start server

   ```baxh
   npm run dev
   ```
