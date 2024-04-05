import LoginPage from '../../pages/loginPage'
import HomePage from '../../pages/homePage'

describe('Login Page Test Cases', () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();

  before(function () {
    cy.fixture('loginData').then(function (login) {
      globalThis.login = login;
    })
  })

  beforeEach(function () {
    cy.openUrl('/')
  })

  it('verify the login functionality with invalid credentials', () => {
    loginPage.doLogin(login.invalidCredentials.username, login.invalidCredentials.password)
    loginPage.getAuthenticationError().then(function (alertMessage) {
      assert.equal(login.invalidCredentials.alertMessage, alertMessage)
    })
  })

  it('verify the Forgot password functionality', () => {

    loginPage.clickOnForgotPasswordLink()
    loginPage.getRestPasswordPopupTitle().then(function (title) {
      assert.equal(login.forgotPassword.title, title)
    })
    loginPage.doResetPassword(login.validCredentials.username)
    loginPage.getRestPasswordConfirmation().then(function (msg) {
      assert.equal(login.forgotPassword.confirmationMsg, msg)
    })
  })

  it('verify the login functionality with valid credentials', () => {
    loginPage.doLogin(login.validCredentials.username, login.validCredentials.password)
    homePage.getTitle().then(function (title) {
      assert.equal(login.validCredentials.title, title)
    })
  })

})


