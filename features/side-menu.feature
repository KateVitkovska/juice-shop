Feature: Side Menu
    @side-menu
    Scenario: Validate side menu options when logged in
        Given I open landing page
        And I have logged in
        When I open side menu
        Then I see side menu options
            | Customer Feedback    |
            | Complaint            |
            | Support Chat         |
            | About Us             |
            | Photo Wall           |
            | Deluxe Membership    |
            | Help getting started |
            | GitHub               |