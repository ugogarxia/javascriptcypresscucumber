import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import Login_PO from "../page_objects/Login_PO"

const loginPO = new Login_PO()
let stub

When('Enter user name {string} and password {string}', (userName, password) => {
   loginPO.elements.userNameTextField().type(userName)
   loginPO.elements.userPasswordTextField().type(password)
   stub = cy.stub();
   cy.on('window:alert', stub)
   loginPO.elements.loginButton().click()


})

Then('Login status {string}', (responseLogin) => {
   expect(stub).to.have.been.calledWith(responseLogin)
})