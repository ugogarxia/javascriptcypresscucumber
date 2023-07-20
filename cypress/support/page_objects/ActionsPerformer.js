class ActionsPerformer {
    navigate(path) {
        cy.fixture("config.json").then(
            (data) => {
                
                cy.visit(data.baseURL + path).reload()
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
export default ActionsPerformer;