import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

When('I type user information', () => {
    cy.get('[name="first_name"]').type('Joe');
    cy.get('[name="last_name"]').type('Son');
    cy.get('[name="email"]').type('joeson@email.com');
    cy.get('[name="message"]').type('this is a test message');
    cy.get('[type="submit"]').click()

})

When('I type user information , first name {string}, last name {string}, email address {string} and message {string}', (firstName, lastName, emailAddress, message) => {
    cy.get('[name="first_name"]').type(firstName);
    cy.get('[name="last_name"]').type(lastName);
    cy.get('[name="email"]').type(emailAddress);
    cy.get('[name="message"]').type(message);
    cy.get('[type="submit"]').click()
})

Then('Successful contact submission message should appear {string}', (message) => {
    cy.xpath('//h1|//body').contains(message)
})

