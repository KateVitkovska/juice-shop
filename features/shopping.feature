Feature: Shopping Feature

    @shop
    Scenario: Browse and add products to basket
        Given I open landing page
        And I have logged in
        When I submit 'Juice' in search bar
        And I add items to basket
            | Name         | Price |
            | Apple Juice  | 1.99  |
            | Banana Juice | 1.99  |
            | Lemon Juice  | 2.99  |
        And I open shopping basket
        Then I see items in basket
            | Name         | Price |
            | Apple Juice  | 1.99  |
            | Banana Juice | 1.99  |
            | Lemon Juice  | 2.99  |

    @price
    Scenario Outline: Check total price
        Given I open landing page
        And I have logged in
        When I add "<item1>" to basket
        And I add "<item2>" to basket
        And I open shopping basket
        Then I see total price is "<total>"

    Examples:   
        | item1            | item2          | total |
        | Apple Juice      | Banana Juice   | 3.88  |
        | Eggfruite Juice  | Apple Pomace   | 9.88  |