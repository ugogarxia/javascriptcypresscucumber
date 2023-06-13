import { Given, When } from "@badeball/cypress-cucumber-preprocessor"


const url = 'http://www.webdriveruniversity.com/'

Given('I navigate to the webdriver university home page', () => {
    cy.visit(url)
})

When('I click on the contact us button', () => {
    //cypress doestn support multiple tabs
    //cy.get('#contact-us').invoke('removeAttr', 'target').click()
    cy.clickAndOpenLink_inSameTab('#contact-us')
})

When('User click on Login link',()=>{
    //cy.get('#login-portal').invoke('removeAttr', 'target').click()
    cy.clickAndOpenLink_inSameTab('#login-portal')
})
