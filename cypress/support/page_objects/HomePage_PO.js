import Base_PO from "./Base_PO";

class HomePage_PO extends Base_PO {

    navigateToHomePage() {
        super.navigate("");
    }

    elements = {
        contactUsLink: () => cy.clickAndOpenLink_inSameTab('#contact-us'),
        loginLink: () => cy.clickAndOpenLink_inSameTab('#login-portal')
    }


}

export default HomePage_PO