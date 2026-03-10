import { Given, When, Then } from "@cucumber/cucumber";
import { page } from "../support/world"
import { LoginPage } from "../pages/LoginPage";

const loginpage = new LoginPage(page);

Given('user navigate to the login page', async function(){

    await loginpage.navigate();

});


When('user enter { string } name and { string }', async function(username, password){

    await loginpage.login(username,password);
});

Then('user should see the dashboard', async function(){

    await page.waitForSelector('#dashboard');
});

