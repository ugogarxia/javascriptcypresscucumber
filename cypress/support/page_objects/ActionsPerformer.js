class ActionsPerformer {
    
    toLiverpoolNavigate(path) {
        cy.fixture("config.json").then(
            (data) => {
                
                cy.visit(data.toLiverpoolNavigate+ path,{failOnStatusCode: false}).reload()
            })
    }

    
    toUniversityNavigate(path) {
        cy.fixture("config.json").then(
            (data) => {
                
                cy.visit(data.baseURLUniversity + path,{failOnStatusCode: false}).reload()
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