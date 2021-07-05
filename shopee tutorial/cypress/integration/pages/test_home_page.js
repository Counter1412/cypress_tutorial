/// <reference types="Cypress" />

import HomePage from "./../../src/commands/homepage_command";
import SignInPage from "./../../src/commands/sign_in_page_command";
require("./../../src/commands/base_command")

context(Cypress.env("author") + " Final Project", () => {
  // if there is no data in setting skip test
  if (!Cypress.env("default_url")) return;

  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.open_browser({});
    // cy.visit('http://automationpractice.com')
    cy.wait(1000);
  });

  const home_page = new HomePage();
  const sign_in_page = new SignInPage();

  afterEach(() => {
    //cy.logout();
  });

  

  specify("Ex1 - Check display error message when input invalid email", () => {
    home_page.click_sign_in_btn();
    sign_in_page.input_invalid_email_create("abc123");
    sign_in_page.check_display_invalid_mes()
  });
});
