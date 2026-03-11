Feature: Auth

    This feature is for logging in and registration

    @login
    Scenario: Login
        Given I open landing page
        And I press on Accoiunt button
        And I press log in
        And I am on login page
        When I enter login email
        And I enter login password
        And I confirm login
        Then I am logged in

    Scenario: Register a new user
        
