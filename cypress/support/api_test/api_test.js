class ApiTest {
  
  
  sendPost() {
    cy.api(
      { 
      method: "POST", 
      url: "https://google.com", 
      headers: {} }).then((response) => {
        const responsetoken = response.body.access_token;
      });

      cy.api()
    cy.request()

  }


}
export default ApiTest;
