# Finance Data Service API

A role-based backend system for managing financial records with
authentication, access control, and analytics.

## Overview

-   User authentication (register/login)
-   Role-based access control (Viewer, Analyst, Admin)
-   Financial record CRUD operations
-   Dashboard analytics
-   Swagger API documentation

## Tech Stack

-   Node.js
-   Express.js
-   TypeScript
-   Prisma ORM
-   SQLite
-   JWT Authentication
-   bcryptjs
-   Zod
-   Swagger (swagger-ui-express, swagger-jsdoc)

## Project Structure

src/ ├── config/ ├── controllers/ ├── middlewares/ ├── routes/ ├──
services/ ├── types/ ├── utils/ └── index.ts

## Setup

``` bash
npm install
```

Create `.env`:

    DATABASE_URL="file:/absolute/path/to/prisma/dev.db"
    JWT_SECRET="your_secret_key"
    PORT=5000

Prisma setup:

``` bash
npx prisma generate
npx prisma migrate dev
```

Run server:

``` bash
npm run dev
```

Base URL: http://localhost:5000

Swagger Docs: http://localhost:5000/api-docs

## Authentication

Use header:

Authorization: Bearer `<token>`{=html}

------------------------------------------------------------------------

## API Endpoints

### Register

POST /auth/register

``` json
{
  "email": "admin@test.com",
  "password": "123456",
  "role": "ADMIN"
}
```

Curl:

``` bash
curl -X POST http://localhost:5000/auth/register \
-H "Content-Type: application/json" \
-d '{
  "email": "admin@test.com",
  "password": "123456",
  "role": "ADMIN"
}'
```

------------------------------------------------------------------------

### Login

POST /auth/login

``` json
{
  "email": "admin@test.com",
  "password": "123456"
}
```

Curl:

``` bash
curl -X POST http://localhost:5000/auth/login \
-H "Content-Type: application/json" \
-d '{
  "email": "admin@test.com",
  "password": "123456"
}'
```

------------------------------------------------------------------------

### Create Record (ADMIN)

POST /records

``` json
{
  "amount": 1000,
  "type": "INCOME",
  "category": "Salary",
  "date": "2026-04-03",
  "note": "Monthly salary"
}
```

Curl:

``` bash
curl -X POST http://localhost:5000/records \
-H "Authorization: Bearer <TOKEN>" \
-H "Content-Type: application/json" \
-d '{
  "amount": 1000,
  "type": "INCOME",
  "category": "Salary",
  "date": "2026-04-03",
  "note": "Monthly salary"
}'
```

------------------------------------------------------------------------

### Get Records

GET /records

Curl:

``` bash
curl -X GET http://localhost:5000/records \
-H "Authorization: Bearer <TOKEN>"
```

------------------------------------------------------------------------

### Update Record (ADMIN)

PUT /records/:id

``` json
{
  "amount": 2000
}
```

Curl:

``` bash
curl -X PUT http://localhost:5000/records/<ID> \
-H "Authorization: Bearer <TOKEN>" \
-H "Content-Type: application/json" \
-d '{
  "amount": 2000
}'
```

------------------------------------------------------------------------

### Delete Record (ADMIN)

DELETE /records/:id

Curl:

``` bash
curl -X DELETE http://localhost:5000/records/<ID> \
-H "Authorization: Bearer <TOKEN>"
```

------------------------------------------------------------------------

### Dashboard Summary (ANALYST, ADMIN)

GET /dashboard/summary

Curl:

``` bash
curl -X GET http://localhost:5000/dashboard/summary \
-H "Authorization: Bearer <TOKEN>"
```

------------------------------------------------------------------------

## Roles

-   VIEWER → Read only
-   ANALYST → Read + analytics
-   ADMIN → Full access

------------------------------------------------------------------------

## Error Format

``` json
{
  "message": "Error description"
}
```

------------------------------------------------------------------------

## Notes

-   All protected routes require JWT token
-   Prisma is used for database operations
-   Validation handled via Zod
-   Swagger UI available for interactive testing
