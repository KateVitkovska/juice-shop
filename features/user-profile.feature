Feature: User profile
This feature for all user profile tests

Rule: User should be able to change profile details
@username

Example: Change username
    Given I open landing page
    And I have logged in
    And I press on Account button
    When I press on profile button
    And I see username
    And I change username
    Then I see new username
    And I do not see the old username
    # Given I open landing page
    # * I have logged in
    # * I press on Account button
    # When I press on profile button
    # * I see username
    # * I change username
    # Then I see new username
    # * I do not see the old username
