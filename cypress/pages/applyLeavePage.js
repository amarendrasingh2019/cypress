class applyLeavePage {

  ///locators 
  firstName_Txb = '[name="firstName"]'
  lastName_Txb = '[name="lastName"]'
  save_Btn = '[type="submit"]'
  applyLeaveMessage_Ele = 'p.oxd-text--subtitle-2'

  ///Methods

  getApplyLeaveValue() 
  {
    return cy.get(this.applyLeaveMessage_Ele).invoke('text')
  }
}
export default applyLeavePage;