export class SignupPage {

    signupPage_Firstname = '#contact-first-name'
    signupPage_Lastname = '#contact-last-name'
    signupPage_Contactnumber = '#contact-info-phone'
    signupPage_Workemail = '#email'
    signupPage_Organizationname = '#name'
    signupPage_Companywebsite = '#website-website'
    signupPage_Numberofemployee = '#numberOfEmployee'
    signupPage_Country = '#select2-countries-container'
    signupPage_Industry = '#select2-industry-container'
    signupPage_username = '#username'
    signupPage_password = '#password'
    signupPage_button = 'Create Account'

    navigate(url) {
        cy.visit(url)
    }
    enterFirstname(firstname){
        cy.get(this.signupPage_Firstname).type(firstname)
    }
    enterLastname(lastname){
        cy.get(this.signupPage_Lastname).type(lastname)
    }
    enterContactnumber(contactnumber){
        cy.get(this.signupPage_Contactnumber).type(contactnumber)
    }
    enterWorkmail(workemail){
        cy.get(this.signupPage_Workemail).type(workemail)
    }
    enterOrganizationname(organizationname){
        cy.get(this.signupPage_Organizationname).type(organizationname)
    }
    enterCompanywebsite(companywebsite){
        cy.get(this.signupPage_Companywebsite).type(companywebsite)
    }
    enterNumberofemployee(numberofemployee){
        // cy.get(this.signupPage_Numberofemployee).type(numberofemployee)
        cy.get(this.signupPage_Numberofemployee).select(1).should('have.value', '1')
    }
    enterCountry(country){
        // cy.get(this.signupPage_Country).type(country)
        cy.get(this.signupPage_Country).click()
        .get('.select2-search__field').type('Bang{enter}')
    }
    enterIndustry(industry){
        // Click on the Select2 combobox to open the dropdown
        cy.get(this.signupPage_Industry).click();
        // Find the option by index and click on it
        const signupPage_Industry_indexToClick = 2; // Replace with the desired index
        cy.get('.select2-results__option')
        .eq(signupPage_Industry_indexToClick)
        .click();

    }
    enterSignupusername(signupusername) {
        cy.get(this.signupPage_username).type(signupusername)
    }
    enterSignuppassword(signuppassword) {
        cy.get(this.signupPage_password).type(signuppassword)
    }
    clickSignupButton() {
        cy.contains(this.signupPage_button).click()
    }
}