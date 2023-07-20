import { Given, When ,Then} from "@badeball/cypress-cucumber-preprocessor"
import HomePage_PO from "../page_objects/HomePage_PO";


const homePage = new HomePage_PO();
const URLPage = ""

Given('I navigate to the webdriver university home page', () => {
    homePage.toUniversityNavigate(URLPage)
})

When('I click on the contact us button', () => {
    //cypress doestn support multiple tabs
    //cy.get('#contact-us').invoke('removeAttr', 'target').click()
    homePage.elements.contactUsLink()

})

When('User click on Login link', () => {
    //cy.get('#login-portal').invoke('removeAttr', 'target').click()
    homePage.elements.loginLink()
})


Given('A user that open Livepool store online webpage',()=>{
    homePage.toLiverpoolNavigate('')
})

Given('User that made search on Liverpool online store for   playstation 5',()=>{

})

When('Results are displayed validate the search return playstation 5 and playstation consoles',()=>{

})

Then('Then Select playstation 5 in the listed results',()=>{})

Then('Validate the title and the price {string}',(price)=>{})