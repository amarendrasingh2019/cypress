class HomePage {

    ///locators 
    header_Ele = '.oxd-topbar-header-breadcrumb h6'
    visited_Ele = '.--visited a'
    applyLeave_Ele = '[title="Apply Leave"]'

    ///Methods
    getTitle() {
        return cy.get(this.header_Ele).invoke('text')
    }

    selectTopMenuItem(topMenu) {
        cy.contains(topMenu).click()
    }

    selectApplyLeave()
    {
        cy.get(this.applyLeave_Ele).click()
    }
}

export default HomePage;