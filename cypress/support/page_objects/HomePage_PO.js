import ActionsPerformer from "./ActionsPerformer";

class HomePage_PO extends ActionsPerformer {

    navigateToHomePage() {
        super.navigate("");
    }

    elements = {
        contactUsLink: () => cy.clickAndOpenLink_inSameTab('#contact-us'),
        loginLink: () => cy.clickAndOpenLink_inSameTab('#login-portal')
    }
}

export default HomePage_PO