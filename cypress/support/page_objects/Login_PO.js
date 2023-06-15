import ActionsPerformer from "./ActionsPerformer";

class Login_PO extends ActionsPerformer {
    
    elements = {
        userNameTextField: () => cy.get('#text'),
        userPasswordTextField: () => cy.get('#password'),
        loginButton: () => cy.get('[id="login-button"]')
    }
}
export default Login_PO;