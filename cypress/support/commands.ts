/// <reference types="cypress" />
import type { Clerk } from '@clerk/types';
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
declare global {
    namespace Cypress {
        interface Chainable {
            signOut(): Chainable<void>
            signIn(): Chainable<void>
        }
    }
    interface Window {
        Clerk: Clerk;
    }
}

Cypress.Commands.add(`signOut`, () => {
    cy.log(`Sign out by clearing all cookies.`);
    cy.clearCookies({ domain: null, });
  });
  
Cypress.Commands.add(`signIn`, () => {
    cy.log(`Signing in.`);

    cy.window()
        .should((window) => {
            expect(window).to.not.have.property(`Clerk`, undefined);
            expect(window.Clerk.loaded).to.eq(true);
        })
        .then(async (window) => {
            const res = await window.Clerk.client.signIn.create({
                identifier: Cypress.env(`test_user`),
                password: Cypress.env(`test_password`),
            });

            await window.Clerk.setActive({
                session: res.createdSessionId,
            });

            cy.log(`Finished Signing in.`);
        });
});

// Prevent TypeScript from reading file as legacy script
export {};
