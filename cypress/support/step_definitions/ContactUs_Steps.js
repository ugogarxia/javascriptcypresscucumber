import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import ContactUS_PO from "../page_objects/ContactUs_PO";

const contactUs = new ContactUS_PO();

When('I type user information', () => {
    contactUs.textBoxInput(contactUs.elements.firstNameTextField(), "Joe")
    contactUs.textBoxInput(contactUs.elements.lastNameTextField(), "Son")
    contactUs.textBoxInput(contactUs.elements.emailTextField(), "joeson@email.com")
    contactUs.textBoxInput(contactUs.elements.commentsTextField(), "this is a test message")
    contactUs.clickOnElement(contactUs.elements.submitBUtton())


})

When('I type user information , first name {string}, last name {string}, email address {string} and message {string}', (firstName, lastName, emailAddress, message) => {
    contactUs.elements.firstNameTextField().type(firstName)
    contactUs.elements.lastNameTextField().type(lastName)
    contactUs.elements.emailTextField().type(emailAddress)
    contactUs.elements.commentsTextField().type(message)
    contactUs.elements.submitBUtton().click()

})

Then('Successful contact submission message should appear {string}', (message) => {
    contactUs.elements.confirmationMessage().contains(message)
})

