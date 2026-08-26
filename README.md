# Personal Finance Dashboard

Track your income, expenses, budgets, and goals in one place. Built with React, Vite, Tailwind CSS, and Firebase.

## Features

- *Dashboard* — summary of your balance, income, and spending
- *Transactions* — add, edit, filter, and delete transactions
- *Budgets* — set category budgets and track progress
- *Goals* — save toward targets
- *Analytics* — charts for income vs. expenses and spending by category
- *Auth* — sign up, log in, and manage your profile

## Getting Started

### 1. Install

bash
npm install


### 2. Add your Firebase keys

Create a .env file in the project root:

env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id


Find these in your Firebase Console under *Project settings → Your apps*. Make sure Firestore and Authentication are enabled.

> .env should stay out of git — never commit your keys.

### 3. Run 
The deployed link : https://personal-finance-dashboard-jet-seven.vercel.app/

bash
npm run dev


Then open the URL Vite prints (usually http://localhost:5173).

## Scripts

| Command | What it does |
| --- | --- |
| npm run dev | Start the dev server |
| npm run build | Build for production |
| npm run preview | Preview the production build |
| npm run lint | Run ESLint |

## Project Structure


src/
  Pages/           Route pages (Dashboard, Transactions, Goals, Login, ...)
  components/      Shared UI and feature components
    analytics/     Charts and analytics helpers
    budget/        Budget cards, modal, and pie chart
    ui/            Base UI primitives (button, card, dialog, ...)
  lib/
    firebase.js    Firebase setup (Firestore + Auth)
    utils.js       Helpers
  App.jsx          Routes and page layout
  main.jsx         App entry point


## Routes

| Path | Page |
| --- | --- |
| / | Landing |
| /login, /signup | Auth |
| /dashboard | Dashboard |
| /transactions | Transactions |
| /budgets | Budgets |
| /goals | Goals |
| /analytics | Analytics |
| /reports | Reports |
| /profile-settings | Profile settings |

## Tech Stack

React 19 · Vite · React Router · Tailwind CSS · Recharts · Firebase · Lucide Icons