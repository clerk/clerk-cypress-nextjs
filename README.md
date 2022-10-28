This is a simple Clerk+Next.js application showing how you can create and run e2e Cypress tests for your application

## Accompanying documentation
https://clerk.dev/docs/testing/cypress

## Getting Started

1. add a .env.local file with your keys:
NEXT_PUBLIC_CLERK_FRONTEND_API=clerk.****.lcl.dev
CLERK_API_KEY=test_****

2. Install deps
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to make sure the application is working.

4. Open Cypress while keeps the development server running:
```bash
npm run cypress:open
```

5. Navigate through cypress and run the tests

e2e testing -> chrome -> start e2e testing in chrome
