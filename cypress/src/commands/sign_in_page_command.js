/// <reference types = "Cypress" />
let SignInPage = require("../../data/locators/sign_in_page");

class Sign_In_Page {
  input_invalid_email_create(email) {
    cy.get(SignInPage.page_items.email_create).type(email);
    cy.get(SignInPage.page_items.submit_create_btn).click({ force: true });
  }

  check_display_invalid_mes() {
    cy.get(SignInPage.page_items.error_msg_locator).scrollIntoView();
    cy.get(SignInPage.page_items.error_msg_locator).should(
      'contain.text',
      SignInPage.page_items.error_msg
    );
  }
}

export default Sign_In_Page;
