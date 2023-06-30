import { Given, When, Before, After } from "@badeball/cypress-cucumber-preprocessor"


Before({ tags: "@smoke" }, () => {
    console.log("Test before smoke")
})




