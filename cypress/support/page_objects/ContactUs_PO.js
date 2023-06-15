import ActionsPerformer from "./ActionsPerformer";

class ContactUS_PO extends ActionsPerformer {

    elements = {
        commentsTextField: () => cy.get('[name="message"]'),
        firstNameTextField: () => cy.get('[name="first_name"]'),
        lastNameTextField: () => cy.get('[name="last_name"]'),
        emailTextField: () => cy.get('[name="email"]'),
        submitBUtton: () => cy.get('[type="submit"]'),
        confirmationMessage:()=>cy.xpath('//h1|//body')
    }
}

export default ContactUS_PO