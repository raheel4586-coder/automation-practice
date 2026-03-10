Feature: Login functionality

Scenario Outline: Login with multiple users
    Given user navigate to the login page
    When user enter <username> name and <password>
    Then user should see the dashboard

Examples:
| username | password |
| admin | admin123 |
| test  | test123 |

