/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress
import { setupClerkTestingToken } from "@clerk/testing/cypress";

// Cypress E2E Test
describe("Testing Tokens", () => {
  it("sign in", () => {
    setupClerkTestingToken();

    cy.visit('/protected');

    cy.contains('h1', 'Sign in');
    cy.get('.cl-signIn-root').should('exist');
    cy.get('input[name=identifier]').type(Cypress.env('test_user'));

    cy.get('.cl-formButtonPrimary').contains('button', 'Continue').click();
    cy.get('input[name=password]').type(Cypress.env('test_password'));


    cy.get('.cl-formButtonPrimary').contains('button', 'Continue').click();


    cy.url().should('include', '/protected');
    cy.contains('h1', 'This is a PROTECTED page');

    cy.visit('/');
    cy.contains('signed-in');

  });

  // Account Portal example
  // it("sign in with Account Portal redirects", () => {
  //   setupClerkTestingToken();

  //   cy.origin('', () => {
  //     cy.visit('http://localhost:3000/protected');

  //     cy.contains('h1', 'Sign in');
  //     cy.get('.cl-signIn-root').should('exist');
  //     cy.get('input[name=identifier]').type(Cypress.env('test_user'));
  
  //     cy.get('.cl-formButtonPrimary').contains('button', 'Continue').click();
  //     cy.get('input[name=password]').type(Cypress.env('test_password'));
  
  
  //     cy.get('.cl-formButtonPrimary').contains('button', 'Continue').click();
  //   });

  //   cy.url().should('include', '/protected');
  //   cy.contains('h1', 'This is a PROTECTED page');

  // });

  it("sign in and sign out with custom command", () => {
    cy.visit(`/`);
    cy.clerkSignIn({ 
      strategy: 'password', 
      identifier: Cypress.env('test_user'), 
      password: Cypress.env('test_password') 
    });
    cy.visit('/protected');
    cy.contains('h1', 'This is a PROTECTED page');
    cy.visit('/');
    cy.clerkSignOut();
    cy.visit('/protected');
    cy.get('.cl-signIn-root').should('exist');
    cy.visit('/');
    cy.contains('p', 'signed-out');
  });

  it("sign up", () => {
    setupClerkTestingToken();

    cy.visit('/sign-up');
    cy.contains('h1', 'Sign Up');
    cy.get('.cl-signUp-root').should('exist');
    cy.get('input[name=username]').type('e2euser' + new Date().getTime());

    cy.get('input[name=password]').type(Cypress.env('test_password'));

    cy.get('.cl-formButtonPrimary').contains('button', 'Continue').click();

    cy.visit('/protected');
    cy.url().should('include', '/protected');
  });
});

// Prevent TypeScript from reading file as legacy script
export {};
