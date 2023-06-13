import Base_PO from "./Base_PO";

class Login_PO extends Base_PO{
    typeUserName (userName){
        cy.get('#text').type(userName) 
    }

    typePassword (password){
        cy.get('#password').type(password) 
    }

    clickOnLogin(){
        cy.get('[id="login-button"]').click()
    }


}
export default Login_PO;