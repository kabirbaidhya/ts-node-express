# TypeScript NodeJS Starter Project

Starter Project for TypeScript, NodeJS and Express.

## Installation

Clone the repository, install the dependencies and get started right away. Make sure you already have `nodejs`, `npm` and `yarn` installed in your system.
```
$ yarn
```

## Configuration
Create a `.env` file for application specific environment variables and update it according to your database & env specific params.
```bash
$ cp .env.example .env
```

## Migrations & Seeding
You'll need to run migrations to get your database ready.
```bash
# Run Migrations and seeds
$ yarn migrate
```

## Running locally
```bash
$ yarn start # or npm start
```

## Building for Production
```bash
$ yarn build # or npm run build
```

## Starting the Server
You can use [`pm2`](https://github.com/Unitech/pm2) to start the once you built the application.
```bash
$ yarn service:start # or npm run service:start
```
