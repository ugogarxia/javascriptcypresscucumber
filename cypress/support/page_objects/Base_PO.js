class Base_PO {
    navigate(path) {
        cy.fixture("config.json").then(
            (data) => {
                cy.visit(data.baseURL + path)
            })
    }

    textBoxInput(objName, value) {
        objName.type(value);
    }

    clickOnElement(objName) {
        objName.click()
    }

    getPageTittle() {
        return cy.title()
    }
}
export default Base_PO;