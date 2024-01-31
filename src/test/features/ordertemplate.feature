Feature: Order template

    Background:
        Given User is on the Login page

    Scenario: Create order template
        And User enter the username as "asim@visualr.com.au"
        And User enter the password as "Admin12@"
        When User click on the Login button
        When User navigate to the Order template page
        Then User edits and saves the template
        # Then User verifies the template is saved
        Then User removes the selected products
        # Then User verifies the template is deleted
        Then user saves the template