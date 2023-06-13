import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import Login_PO from "../page_objects/Login_PO"

const loginPO = new Login_PO()
let stub

When('Enter user name {string} and password {string}', (userName, password) => {
   loginPO.typeUserName(userName)
   loginPO.typePassword(password)
   stub = cy.stub();
   cy.on('window:alert', stub)
   loginPO.clickOnLogin()

})

Then('Login status {string}', (responseLogin) => {
   expect(stub).to.have.been.calledWith(responseLogin)
})