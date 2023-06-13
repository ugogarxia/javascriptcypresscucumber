import Base_PO from "./Base_PO";

class HomePage_PO extends Base_PO {

    navigateToHomePage() {
        super.navigate("");
    }

    clickOn_ContactUs_Button() {
        cy.clickAndOpenLink_inSameTab('#contact-us')
    }

    clickOn_Login_Button() {
        cy.clickAndOpenLink_inSameTab('#login-portal')
    }

}

export default HomePage_PO