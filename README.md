# Fresher Pass

A hopeless attempt at making yet another future-proof:tm: fresher pass with modern technology.

Aims to be usable on mobile through "Add to home screen" or similar functionality, as well as on desktop.

Current features to be implemented can be found in [TODO](https://github.com/ConcernedHobbit/fresher-pass/blob/main/docs/TODO.md).

# Installation

1. Clone project locally
```bash
  git clone https://github.com/ConcernedHobbit/fresher-pass.git
  cd fresher-pass
```

2. Install dependencies
```bash
  npm install
```

3. Create .env file
```bash
  cp .env.template .env
```

4. Initialize the database
```bash
  npx prisma migrate dev --name initialization
```

## Developing
Start the development server:
```bash
  npm run dev
```
It will automatically update when it detects changes to the source.

## Building & deploying
Building and running the application in production mode is simple:
```bash
  npm run build
  npm start
```
**At this point of the project it is not recommended to run in production mode.**

## Full Stack Open

This is a course project for the [Full Stack Open](https://fullstackopen.com/en) course.

*More FSO-specific documentation will be added at a later date.*