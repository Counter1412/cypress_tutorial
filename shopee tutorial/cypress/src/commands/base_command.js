Cypress.Commands.add("open_browser", () => {
    cy.visit(Cypress.env("default_url"));

  });

