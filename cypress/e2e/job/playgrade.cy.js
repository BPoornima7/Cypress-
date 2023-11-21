describe('verify job functionality', () => {

  it.only('verify user able to add playgrade  with manditary details ', () => {


    cy.login()
    cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(1) > a').click()
    cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-body > nav > ul > li:nth-child(2) > span > i').click()
    cy.contains('Pay Grades').click()
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div.orangehrm-header-container > div > button').click()
    let r = (Math.random() + 1).toString(36).substring(7);

    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-row > div > div > div > div:nth-child(2) > input').type("testing" + r)
    cy.get('button[type="submit"]').click()

  })

  it('verify user able to add playgrade  without manditary details ', () => {


    cy.login()
    cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(1) > a').click()
    cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-body > nav > ul > li:nth-child(2) > span > i').click()
    cy.contains('Pay Grades').click()
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div.orangehrm-header-container > div > button').click()


    cy.get('button[type="submit"]').click()
    cy.contains('Required').should('be.visible')
  })

  it('verify user able to add playgrade above 50 characters ', () => {


    cy.login()
    cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(1) > a').click()
    cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-body > nav > ul > li:nth-child(2) > span > i').click()
    cy.contains('Pay Grades').click()
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div.orangehrm-header-container > div > button').click()
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-row > div > div > div > div:nth-child(2) > input').type("wertyuiop[asdfghjklzxcvbnm,wertyuiop[asdfghjklzxcvbnm,")
    cy.contains('Should not exceed 50 characters').should('be.visible')
  })
})
