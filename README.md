# Finance Data Service API

A role-based backend system for managing financial records with authentication, access control, and dashboard analytics.

## Overview

- User authentication (register/login)
- Role-based access control (Viewer, Analyst, Admin)
- Financial record CRUD operations
- Dashboard analytics

## Tech Stack

- Node.js
- Express.js
- TypeScript
- Prisma ORM
- SQLite
- JWT Authentication
- bcryptjs
- Zod

## Setup

```bash
npm install
```

Create `.env`:

```
DATABASE_URL="file:/absolute/path/to/prisma/dev.db"
JWT_SECRET="your_secret_key"
PORT=5000
```

Prisma setup:

```bash
npx prisma generate
npx prisma migrate dev
```

Run server:

```bash
npm run dev
```

Base URL:
http://localhost:5000

## Authentication

Use:

```
Authorization: Bearer <token>
```

## API Endpoints

### Register

POST /auth/register

```json
{
  "email": "admin@test.com",
  "password": "123456",
  "role": "ADMIN"
}
```

### Login

POST /auth/login

```json
{
  "email": "admin@test.com",
  "password": "123456"
}
```

### Create Record

POST /records

```json
{
  "amount": 1000,
  "type": "INCOME",
  "category": "Salary",
  "date": "2026-04-03",
  "note": "Salary"
}
```

### Get Records

GET /records

### Update Record

PUT /records/:id

```json
{
  "amount": 2000
}
```

### Delete Record

DELETE /records/:id

### Dashboard Summary

GET /dashboard/summary

## Roles

- VIEWER: read only
- ANALYST: read + analytics
- ADMIN: full access

## Error Format

```json
{
  "message": "Error description"
}
```
