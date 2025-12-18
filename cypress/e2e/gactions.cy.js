describe("Bajra Login", () => {
  it("verify valid-bajra-login", () => {
    cy.visit("https://bajratechnologies.com/web/login");

    cy.get("#login").type(Cypress.env("validusername"));
    cy.get("#password").type(Cypress.env("validpassword"));

    cy.get('button[type="submit"]').click();

    // success assertion
    cy.get("#Inbox", { timeout: 10000 }).should("be.visible");
  });

  it("verify invalid-bajra-login", () => {
    cy.visit("https://bajratechnologies.com/web/login");

    cy.get("#login").type(Cypress.env("invalidusername"));
    cy.get("#password").type(Cypress.env("invalidpassword"));

    cy.get('button[type="submit"]').click();

    // failure assertion
    cy.contains("Invalid login").should("be.visible");
  });

  it("verify invalid-username-bajra-login", () => {
    cy.visit("https://bajratechnologies.com/web/login");

    cy.get("#login").type(Cypress.env("invalidusername"));
    cy.get("#password").type(Cypress.env("validpassword"));

    cy.get('button[type="submit"]').click();

    cy.contains("Invalid login").should("be.visible");
  });

  it("verify invalid-password-bajra-login", () => {
    cy.visit("https://bajratechnologies.com/web/login");

    cy.get("#login").type(Cypress.env("validusername"));
    cy.get("#password").type(Cypress.env("invalidpassword"));

    cy.get('button[type="submit"]').click();

    cy.contains("Invalid login").should("be.visible");
  });
});
