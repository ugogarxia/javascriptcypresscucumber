@login @regression
Feature: Web Driver University - Login Page
       Background: Open University Home Page
              Given I navigate to the webdriver university home page
              When User click on Login link
       @smoke
       Scenario Outline: Enter user name on webdriver page
              And Enter user name <userName> and password <password>
              Then Login status <loginStatus>

              Examples:
                     | userName      | password       | loginStatus            |
                     | "webdriver"   | "webdriver123" | "validation succeeded" |
                     | "webdriver"   | "webdriver122" | "validation failed"    |
                     | "webdriver12" | "webdriver123" | "validation failed"    |
                     | "webdriver"   | "#$%&"         | "validation failed"    |
                     | " "           | "webdriver123" | "validation failed"    |
                     | "webdriver"   | " "            | "validation failed"    |
                     | " "           | " "            | "validation failed"    |





