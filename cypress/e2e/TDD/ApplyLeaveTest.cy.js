import LoginPage from '../../pages/loginPage'
import HomePage from '../../pages/homePage'
import LeavePage from '../../pages/leavePage'

describe('Add Employee Test Cases', () => {

    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const leavePage = new LeavePage();

    before(function () {
        cy.fixture('loginData').then(function (login) {
            globalThis.login = login;
        })
        cy.fixture('applyLeaveData').then(function (leaveData) {
            globalThis.leaveData = leaveData;
        })
    })

    beforeEach(function () {
        cy.openUrl('/')
        loginPage.doLogin(login.validCredentials.username, login.validCredentials.password)
        homePage.getTitle().then(function (title) {
            assert.equal(login.validCredentials.title, title)
        })
    })

    it.only('verify user is able to add new Employee', () => {
        homePage.selectApplyLeave()
        leavePage.getApplyLeaveValue().then(function (msg) {
            assert.equal(leaveData.message, msg)
        })
    })

})

// visit the libary page
cy.visit("https://rahulshettyacademy.com/angularAppdemo/");

cy.intercept({
    method: 'GET',
    url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
},
    {
        statusCode: 200,
        body: [{
            "book_name": "RestAssured with Java",
            "isbn": "RSU",
            "aisle": "2301"
        }]
    }).as('bookretrievals');

cy.get("button[class='btn btn-primary']").click()

cy.get('p').should('have.text', 'Sorry we have only one book available')








