Feature: Customer service

    @customer-service
    Scenario: Contact customer service
    Given I open landing page
    And I have logged in
    When I open side menu
    And I open 'Complaint' side menu option
    # And I type and send message "I don't like tomato juice"
    And I send following message
    """
    Honestly i like what you guys are doing, 
    it is great and i like it. I love the juice.
    """
    Then I see confirmation message about "Customer support will get in touch with you soon!"
