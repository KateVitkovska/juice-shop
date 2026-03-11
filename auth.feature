Feature: Auth

    This feature is for  logging in and registretion
    @login
    Scenario: Login
        Given I open landing page
        And I press on Account button
        And  I press log in
        And I am on login page
        When I fill in email 
        And I fill in password
        And I confirm login
        Then I am logged in

    Scenario: Registration
       Given I open landing page
        And I press on Account button
        And  I press log in
        When I press not yet a customer
        And I enter email address
        And I enter password repeatedlyAnd I select a question about elder sibling  
        And i write answer to question
        And I press registration button
        Then I am on log in page
        And I enter login email
        And I enter login password
        And I am logged in