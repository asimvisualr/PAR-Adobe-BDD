Feature: User Login

    Background:
        Given User is on the Login page

    Scenario: Verify UI elements presence
        Then I should see the email input field
        And I should see the password input field
        And I should see the submit button

    Scenario: User Login should be successful
       And User enter the username as "asim@visualr.com.au"
        And User enter the password as "Admin12@"
        When User click on the Login button
        Then User should be able to login successfully

    Scenario: User Login should be unsuccessful
         And User enter the username as "asim@visualr.com.au"
         And User enter the password as "Admin1222"
         When User click on the Login button
         Then User should not be able to login successfully

    Scenario: Testing login with invalid username
        And User enter the username as "asimm@visualr.com.au"
        And User enter the password as "Admin12@"
        When User click on the Login button
        Then User should not be able to login successfully

    Scenario: Testing login with empty username
        And User enter the password as "Admin12@"
        When User click on the Login button
        Then User should be able to login successfully
        Then I should see a email validation message

    Scenario: Testing login with empty password
        And User enter the username as "asim@visualr.com.au"
        When User click on the Login button
        Then I should see a password validation message

    Scenario: Testing login with empty credentials
        When I try to login without entering any credentials
        Then I should see a username and password failure message
    
    Scenario: Testing password visibility toggle
        And User enter the password as "Admin12@"
        When User click on the Login button
        When I toggle the password visibility

         