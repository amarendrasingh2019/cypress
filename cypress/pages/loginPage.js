class LoginPage {
    ///locators

    userName_Txb = '[name="username"]'
    password_Txb = '[name="password"]'
    login_Btn = '.orangehrm-login-button'
    authenticationError_Msg = '.oxd-alert-content-text'
    forgotPassword_Lnk = '.orangehrm-login-forgot'
    forgotPasswordTitle_Txt = '.orangehrm-forgot-password-title'
    resetPassword_Btn = '.orangehrm-forgot-password-button--reset'

    ///Methods
    doLogin(userName, password) {

        cy.get(this.userName_Txb).type(userName)
        cy.get(this.password_Txb).type(password)
        cy.get(this.login_Btn).click()
    }

    getAuthenticationError() {

        return cy.get(this.authenticationError_Msg).invoke('text')

    }

    clickOnForgotPasswordLink() {
        cy.get(this.forgotPassword_Lnk).click()
    }

    getRestPasswordPopupTitle() {
        return cy.get(this.forgotPasswordTitle_Txt).invoke('text')
    }

    doResetPassword(userName) {
        cy.get(this.userName_Txb).type(userName)
        cy.get(this.resetPassword_Btn).click()
    }

    getRestPasswordConfirmation() {
        return cy.get(this.forgotPasswordTitle_Txt).invoke('text')
    }

}
export default LoginPage;