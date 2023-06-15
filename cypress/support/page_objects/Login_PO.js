import Base_PO from "./Base_PO";

class Login_PO extends Base_PO {

    elements = {
        userNameTextField: () => cy.get('#text'),
        userPasswordTextField: () => cy.get('#password'),
        loginButton: () => cy.get('[id="login-button"]')

    }
}
export default Login_PO;