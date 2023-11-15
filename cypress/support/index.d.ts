/* eslint-disable @typescript-eslint/no-namespace */
import type { Clerk } from '@clerk/types';

declare global {
    namespace Cypress {
        interface Chainable {
            signIn(email : string, password : string) : Chainable<void>;
            signOut() : Chainable<void>;
        }
    }
    interface Window {
        Clerk : Clerk;
    }
}

export {};
