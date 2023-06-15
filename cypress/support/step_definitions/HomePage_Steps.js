import { Given, When } from "@badeball/cypress-cucumber-preprocessor"
import HomePage_PO from "../page_objects/HomePage_PO";


const homePage = new HomePage_PO();
const URLPage = ""

Given('I navigate to the webdriver university home page', () => {
    homePage.navigate(URLPage)
})

When('I click on the contact us button', () => {
    //cypress doestn support multiple tabs
    //cy.get('#contact-us').invoke('removeAttr', 'target').click()
    homePage.elements.contactUsLink()

})

When('User click on Login link', () => {
    //cy.get('#login-portal').invoke('removeAttr', 'target').click()
    homePage.elements.loginLink()
})
