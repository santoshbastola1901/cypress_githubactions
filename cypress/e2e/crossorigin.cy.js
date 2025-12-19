describe("Cross origin demo", () => {
  it("Login with github without cy.origin()", () => {
    cy.visit("https://cloud.cypress.io/login");

    cy.get("button span").contains("Log in").first().click();

    cy.visit("https://github.com");
    cy.get("#login_field").type("test");
    cy.get("#password").type("test123");
    cy.contains("Username");
  });
  it("Login with github with cy.origin()", () => {
    cy.visit("https://cloud.cypress.io/login");

    cy.get("button span").contains("Log in").first().click();

    cy.origin("https://github.com", () => {
      cy.get("#login_field").type("test");

      cy.get("#password").type("test123");
      cy.contains("Username");
    });
  });
});
