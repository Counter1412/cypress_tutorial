/// <reference types = "Cypress"/>

let HomePage = require("./../../src/commands/homepage_command")

describe(Cypress.env("author") + " Final Project", () => {
  // if there is no data in setting skip test
  //if (!Cypress.env("default_url")) return;

  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    //cy.open_browser({});
    cy.visit('http://shopee.vn/')
    cy.wait(1000);
  });

  const home_page = new HomePage();

  afterEach(() => {
    //cy.logout();
  });

  it("Search for seal wax", () => {
    home_page.close_popup();
    home_page.input_search_data('seal wax');
    home_page.click_search_btn()
  })

});
