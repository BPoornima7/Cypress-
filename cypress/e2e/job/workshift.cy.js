describe('verify job functionality', () => {

    it('verify user able to add work shift  with manditary details', () => {


        cy.login()
        cy.contains('Work Shifts').click() 
        cy.contains(' Add ').click()
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div > div > div:nth-child(2) > input').type("night shift")
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(3) > div > div:nth-child(1) > div > div:nth-child(2) > div > div > input').type("9:00AM")
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(3) > div > div:nth-child(2) > div > div:nth-child(2) > div > div > input').type("4:00PM")
      
        cy.contains(' Save ').click()
        
        
      
      })
      
      it('verify user able to add work shift with duplicate name ', () => {
      
      
        cy.login()
        cy.contains('Work Shifts').click() 
        cy.contains(' Add ').click()
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div > div > div:nth-child(2) > input').type("night shift")
       cy.contains('Required').should("be.visible")
      
        
        
      
      })






})