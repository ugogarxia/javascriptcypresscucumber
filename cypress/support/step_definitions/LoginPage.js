import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

let stub
When('Enter user name {string} and password {string}',(userName,password)=>{
   cy.get('#text').type(userName) 
   cy.get('#password').type(password)
   stub=cy.stub();
   cy.on('window:alert',stub)
   cy.get('[id="login-button"]').click()

})

Then('Login status {string}',(responseLogin)=>{
 expect(stub).to.have.been.calledWith(responseLogin)
})