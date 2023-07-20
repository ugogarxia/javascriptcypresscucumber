	
		

describe("test search in amazon",  () => {
    it("Google search",  () => {
      const listResult = "[data-csa-c-pos] .a-size-base-plus";
      cy.visit("https://amazon.com.mx", { failOnStatusCode: false });
      cy.get("#twotabsearchtextbox").type("playstation");
      cy.get("#nav-search-submit-button").click()
      cy.get('[data-csa-c-pos] .a-size-base-plus').each(($element,index,list) => {
        cy.wrap($element).invoke('text()','text').then((text)=>{
          cy.log(text)
        })
        //expect().to.ha
  
      })
      //result = cy.get([listResult]);
      //console.log(results);
    });
  });
  