<p align="center">
  <a href="https://clerk.com?utm_source=github&utm_medium=clerk_docs" target="_blank" rel="noopener noreferrer">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="./public/light-logo.png">
      <img alt="Clerk Logo for light background" src="./public/dark-logo.png" height="64">
    </picture>
  </a>
  <br />
</p>
<div align="center">
  <h1>
    Clerk and Next.js App Router with Cypress E2E tests Quickstart 
  </h1>  
  <a href="https://www.npmjs.com/package/@clerk/clerk-js">
    <img alt="Downloads" src="https://img.shields.io/npm/dm/@clerk/clerk-js" />
  </a>
  <a href="https://discord.com/invite/b5rXHjAg7A">
    <img alt="Discord" src="https://img.shields.io/discord/856971667393609759?color=7389D8&label&logo=discord&logoColor=ffffff" />
  </a>
  <a href="https://twitter.com/clerkdev">
    <img alt="Twitter" src="https://img.shields.io/twitter/url.svg?label=%40clerkdev&style=social&url=https%3A%2F%2Ftwitter.com%2Fclerkdev" />
  </a> 
  <br />
  <br />
  <img alt="Clerk Hero Image" src="./public/hero.png">
</div>

## Introduction

Clerk is a developer-first authentication and user management solution. It provides pre-built React components and hooks for sign-in, sign-up, user profile, and organization management. Clerk is designed to be easy to use and customize, and can be dropped into any React or Next.js application.

After following the quickstart you'll have learned how to:

- Install `@clerk/nextjs`
- Set your Clerk API keys
- Add Clerk's middleware
- Add `<ClerkProvider />` and Clerk components
- Run E2E Cypress tests

## Deploy

Easily deploy the template to Vercel with the button below. You will need to set the required environment variables in the Vercel dashboard.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fclerk%2Fclerk-nextjs-app-quickstart&env=NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,CLERK_SECRET_KEY&envDescription=Clerk%20API%20keys&envLink=https%3A%2F%2Fclerk.com%2Fdocs%2Fquickstart%2Fnextjs&redirect-url=https%3A%2F%2Fclerk.com%2Fdocs%2Fquickstart%2Fnextjs)

## Running the template

```bash
npm run cypress:open
```

To run the example locally, you need to:

1. Sign up for a Clerk account at [https://clerk.com](https://dashboard.clerk.com/sign-up?utm_source=DevRel&utm_medium=docs&utm_campaign=templates&utm_content=clerk-nextjs-app-quickstart).
1. Go to the [Clerk dashboard](https://dashboard.clerk.com?utm_source=DevRel&utm_medium=docs&utm_campaign=templates&utm_content=clerk-nextjs-app-quickstart) and create an application.
1. Set the required Clerk environment variables as shown in [the example `env.local.example` file](./.env.local.example).
1. `npm install` the required dependencies.
1. `npm run dev` to launch the development server.

## Testing

1. See the `testing-tokens.cy.ts` file for Cypress E2E tests.
1. Set the `test_user` and `test_password` to the credentials of the test account shown in [the example `.cypress.env.json.example` file](./cypress.env.json.example).
1. `npm run cypress:open` to launch the development server. This will open the Cypress window, which must remain open throughout testing.
1. In Cypress, choose your preferred browser to test. A new browser window should open.
1. From `Specs`, select a test to run it.

If you aren't running your app on `localhost:3000`, update the `baseUrl` in `cypress.config.ts` to match your development server's URL.

## Learn more

To learn more about Clerk and Next.js, check out the following resources:

- [Quickstart: Get started with Next.js and Clerk](https://clerk.com/docs/quickstarts/nextjs?utm_source=DevRel&utm_medium=docs&utm_campaign=templates&utm_content=clerk-cypress-nextjs)
- [Clerk Documentation](https://clerk.com/docs?utm_source=DevRel&utm_medium=docs&utm_campaign=templates&utm_content=clerk-cypress-nextjs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Testing with Cypress](https://clerk.com/docs/testing/cypress?utm_source=DevRel&utm_medium=docs&utm_campaign=templates&utm_content=clerk-cypress-nextjs)
- [Cypress Documentation](https://docs.cypress.io/app/get-started/why-cypress)

## Found an issue or want to leave feedback

Feel free to create a support thread on our [Discord](https://clerk.com/discord). Our support team will be happy to assist you in the `#support` channel.

## Connect with us

You can discuss ideas, ask questions, and meet others from the community in our [Discord](https://discord.com/invite/b5rXHjAg7A).

If you prefer, you can also find support through our [Twitter](https://twitter.com/ClerkDev), or you can [email](mailto:support@clerk.dev) us!
