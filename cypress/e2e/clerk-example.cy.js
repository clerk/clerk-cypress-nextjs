describe("Signed out", () => {
  // beforeEach(() => {
  //   cy.signOut();
  // });

  it("should navigate to the dashboard in a signed out state", () => {
    // open dashboard page
    cy.visit("http://localhost:3000/dashboard");

    // check h1 says signed out
    cy.get("h1").contains("Signed out");
  });

  it("navigate to the dashboard signed in", () => {
    cy.signIn();

    // open dashboard page
    cy.visit("http://localhost:3000/dashboard");

    // check h1 says signed in
    cy.get("h1").contains("Signed in");
  });

  it("should navigate to the ssr page in a signed out state", () => {
    // open dashboard page
    cy.visit("http://localhost:3000/dashboard-ssr", {
      failOnStatusCode: false,
    });

    // check h1 says signed in
    cy.get("h1").contains("Signed out");
  });
});

describe("Signed in", () => {
  before(() => {
    cy.signIn();
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce("__session", "__client_uat");
  });

  it("navigate to the dashboard", () => {
    // open dashboard page
    cy.visit("http://localhost:3000/dashboard");

    // check h1 says signed in
    cy.get("h1").contains("Signed in");
  });

  it("SSR: navigate to the ssr dashboard", () => {
    // open dashboard page
    cy.visit("http://localhost:3000/dashboard-ssr", {
      failOnStatusCode: false,
    });

    // check h1 says signed in
    cy.get("h1").contains("Signed in");
  });
});
