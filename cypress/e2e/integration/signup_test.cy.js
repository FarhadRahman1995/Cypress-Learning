import {SignupPage} from "../pages/signup_page.cy"
require("async")

const signupPage = new SignupPage()

it('Hellohrm Signup test', () => {
  signupPage.navigate('https://app.hellohrm.com/register');
  signupPage.enterFirstname("Farhad");
  signupPage.enterLastname("Test Reg");
  signupPage.enterContactnumber("01323232123");
  signupPage.enterWorkmail("farhad+reg5jan@codersbucket.com");
  signupPage.enterOrganizationname("FarhadReg2Jan2024");
  signupPage.enterCompanywebsite("https://www.hellohrm.com");
  signupPage.enterNumberofemployee();
  signupPage.enterCountry();
  signupPage.enterIndustry();
  signupPage.enterSignupusername("farhadreg5jan");
  signupPage.enterSignuppassword("123456");
  signupPage.clickSignupButton();
})