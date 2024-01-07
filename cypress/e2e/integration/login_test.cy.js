import {LoginPage} from "../pages/login_page.cy"
require("async")

const loginPage = new LoginPage()

it('Hellohrm Login test', () => {
  loginPage.navigate('https://app.hellohrm.com');
  loginPage.enterUsername("farhadreg2jan");
  loginPage.enterPassword("123456");
  loginPage.clickLoginButton();
})