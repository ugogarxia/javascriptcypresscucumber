class Base_PO {
    navigate(path) {
        cy.fixture("config.json").then(
            (data) => {
                cy.visit(data.baseURL + path)
            })
    }

    getPageTittle() {
        return cy.title()
    }
}
export default Base_PO;