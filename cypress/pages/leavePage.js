class LeavePage {
    ///locators 
    applyLeaveMessage_Ele = 'p.oxd-text--subtitle-2'

    ///Methods

  getApplyLeaveValue() 
  {
    return cy.get(this.applyLeaveMessage_Ele).invoke('text')
  }
}
export default LeavePage;