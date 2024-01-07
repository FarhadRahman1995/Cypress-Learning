export class LoginPage{

    loginpage_username = '#username'
    loginpage_password = '#password'
    loginpage_button = '.btn'

    navigate(url){
        cy.visit(url)
    }
    enterUsername(username){
        cy.get(this.loginpage_username).type(username)
    }
    enterPassword(password){
        cy.get(this.loginpage_password).type(password)
    }
    clickLoginButton(){
        cy.get(this.loginpage_button).click()
    }
}