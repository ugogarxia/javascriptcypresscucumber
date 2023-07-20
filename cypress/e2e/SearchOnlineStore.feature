Feature: Search on Liverpool web page


    Background: Open Livepool WebPage
        Given A user that open Livepool store online webpage
    @search
    Scenario Outline: Search for playstation 5 and validate prices
        Given User that made search on Liverpool online store for   playstation 5
        When Results are displayed validate the search return playstation 5 and playstation consoles
        Then Select playstation 5 in the listed results
        And Validate the title and the price <price>

        Examples:
            | price |
            | 200   |






