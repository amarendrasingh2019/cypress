describe('Cypress Tests with API Request Interception', () => {

    it('Scenario for Control Over Timing ', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/");

        cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/events/push', { statusCode: 200 })
            .as('events');

        cy.get('[name="username"]')
            .type('Admin');

        cy.get('[name="password"]')
            .type('admin123');

        cy.get('.orangehrm-login-button')
            .click();

        cy.wait('@events');

        cy.get('.oxd-topbar-header-breadcrumb h6').invoke('text').then(function (title) {
            assert.equal('Dashboard', title)
        })
    });

    it('Scenario for Stubbing Responses ', () => {

        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");

        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
            {
                statusCode: 200,
                body: [{
                    "book_name": "RestAssured with Java",
                    "isbn": "RSU",
                    "aisle": "2301"
                }]
            }).as('bookretrievals');

        cy.get("button[class='btn btn-primary']").click()

        cy.wait('@bookretrievals');

        cy.get("table.table-dark tbody tr")
            .should('have.length', '1');

        cy.get('p').should('have.text', 'Oops only 1 Book available');
    });

    it('Scenario for Predictable Tests ', () => {

        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");

        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
            {
                statusCode: 200,
                body: [{
                    "book_name": "",
                    "isbn": "RS332",
                    "aisle": "12345"
                }]
            }).as('bookretrievals');

        cy.get("button[class='btn btn-primary']").click()

        cy.wait('@bookretrievals');

        cy.get("table.table-dark tbody tr td").as('row')
            .eq(0).invoke('text').then(function (isbn) {
                assert.equal('RS332', isbn)
            })

        cy.get('@row')
            .eq(1).invoke('text').then(function (aisle) {
                assert.equal('12345', aisle)
            })

        cy.get('@row')
            .eq(2).invoke('text').then(function (book_name) {
                assert.equal('', book_name)
            })
    });
});