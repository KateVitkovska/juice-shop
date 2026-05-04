Feature: payment

    @payment 
    Scenario: Add payment options
        Given I have logged in with a new user
        And I go to My Payment options page
        And I add new cards with details
        And I enter payment details
        | Name     | Card Number      | Expiry Month  | Expiry Year |

        | John Doe | 1234567812345678 |   5           |   2085      |

        | John Doe | 1255567877399338  |   12         |   2088      |
       
        Then I see added card with details

        | Trailing digits | Name       | Expiry Date |

        | 5678            | John Doe   |   5/25      |

        | 9338            | John Doe   |   12/28     |