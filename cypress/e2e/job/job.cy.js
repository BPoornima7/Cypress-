describe('verify job functionality', () => {
  
  cy.viewport(375,812)
it('verify user able to add job title  ', () => {



  var us="qa tester"

      cy.login()
        cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(1) > a').click()
        cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-body > nav > ul > li:nth-child(2) > span > i').click()
        cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-body > nav > ul > li.--active.oxd-topbar-body-nav-tab.--parent > ul > li:nth-child(1) > a').click()

        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div.orangehrm-header-container > div > button').click()
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2) > input').type(us)
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-actions > button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space').click()
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context').should("be.visible")

    
    })

    it('verify user able to add playgrade  ', () => {


      cy.login()
        cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(1) > a').click()
        cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-body > nav > ul > li:nth-child(2) > span > i').click()
        cy.contains('Pay Grades').click()
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div.orangehrm-header-container > div > button').click()
        let r = (Math.random() + 1).toString(36).substring(7);
        
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-row > div > div > div > div:nth-child(2) > input').type("testing"+r)
        cy.get('button[type="submit"]').click()
    
    }) 

    it('verify user able to add employment status  ', () => {


      
      let r = (Math.random() + 1).toString(36).substring(7);
      
      cy.login()
      
      cy.contains('Employment Status').click()
      cy.contains(' Add ').click('')
      cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-row > div > div:nth-child(2) > input').type("status"+r)
      cy.contains(' Save ').click()


  })

  it('verify user able to add job categories  ', () => {


    cy.login() 
    cy.contains('Job Categories').click()
    cy.contains('Add').click()

    let r = (Math.random() + 1).toString(36).substring(7);
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-row > div > div:nth-child(2) > input').type("qa testing"+r)
    cy.contains(' Save ').click()

    

})

it('verify user able to add work shift ', () => {


  cy.login()
  cy.contains('Work Shifts').click() 
  cy.contains(' Add ').click()
  cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div > div > div:nth-child(2) > input').type("night shift")
  cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(3) > div > div:nth-child(1) > div > div:nth-child(2) > div > div > input').type("9:00AM")
  cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(3) > div > div:nth-child(2) > div > div:nth-child(2) > div > div > input').type("4:00PM")

  cy.contains(' Save ').click()
  
  

})


})
   