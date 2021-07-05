/// <reference types = "Cypress" />

let HomePage = require("../../data/locators/homepage");

class Home_Page {
  close_popup() {
    cy.get(HomePage.page_items.popup_close_btn).click({force:true});
  }

  input_search_data(keyword) {
    cy.get(HomePage.page_items.search_bar).type(keyword, {force:true})
  }

  click_search_btn() {
    cy.get(HomePage.page_items.search_btn.selector).click({ force: true });
    
  }

}

export default Home_Page;
