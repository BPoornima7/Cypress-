Feature: Verify add employee functionality

  This feature will verify add employee tests

  Scenario Outline: Verify add employee with valid details

    Given User Launch the Application
    When  User Enter username as "Admin"
    And   User Enter password as "admin123"
    And   User clicks on the login button
    Then  User should be navigated to Dashboard Page
    And   User clicks on PIM Module
    And   User clicks on Add employee sub menu item
    And   User Enter firstname as "<firstname>"
    And   User Enter lastname as "<lastname>"
    And   User clicks on the save button
    Then  User should get message successfully Saved