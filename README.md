# ScholarBridge

A modern academic support platform for working graduate students, built with Next.js, TypeScript, Tailwind CSS, Prisma, and PostgreSQL.

## Features

- Student, expert, and admin-ready UI
- Neon PostgreSQL integration
- Prisma schema for users
- Deployment-ready Vercel configuration

## Local development

1. Install dependencies
   ```bash
   npm install
   ```
2. Start the app
   ```bash
   npm run dev
   ```

## Database

The project uses the supplied Neon PostgreSQL connection string in `.env.local`.

## Deploy to GitHub and Vercel

1. Create a GitHub repository.
2. Run:
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```
3. Import the repository in Vercel and add the `DATABASE_URL` environment variable.
