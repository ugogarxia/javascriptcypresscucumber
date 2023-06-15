import Base_PO from "./Base_PO";

class ContactUS_PO extends Base_PO {

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