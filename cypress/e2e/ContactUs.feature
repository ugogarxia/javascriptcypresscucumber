@contact-us @regression
Feature: Webdriver University - Contact Us Page
    Background: Open University Home Page
        Given I navigate to the webdriver university home page
        When I click on the contact us button

    @smoke
    Scenario: Valid Contact Us form submission
        And I type user information
        Then Successful contact submission message should appear "Thank You for your Message!"

    Scenario Outline: Example of Data Driven
        And I type user information , first name <firstName>, last name <lastName>, email address <emailAddress> and message <message>
        Then Successful contact submission message should appear <submissionMessage>

        Examples:
            | firstName  | lastName       | emailAddress      | message        | submissionMessage              |
            | "userName" | "UserLastName" | "email@email.com" | "message test" | "Thank You for your Message!"  |
            | "userName" | "UserLastName" | "emailemail.com"  | "message test" | "Error: Invalid email address" |




