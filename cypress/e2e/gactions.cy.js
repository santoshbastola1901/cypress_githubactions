describe("Bajra Login", () => {
  it("verify valid-bajra-login", () => {
    cy.visit("https://bajratechnologies.com/web/login");

    cy.get("#login").type(Cypress.env("validusername"));
    cy.get("#password").type(Cypress.env("validpassword"));

    cy.get('button[type="submit"]').click();

    cy.contains("#Inbox");
  });

  it("verify invalid-bajra-login", () => {
    cy.visit("https://bajratechnologies.com/web/login");

    cy.get("#login").type(Cypress.env("invalidusername"));
    cy.get("#password").type(Cypress.env("invalidpassword"));

    cy.get('button[type="submit"]').click();

    cy.contains(/invalid/i).should("be.visible");
  });
});
