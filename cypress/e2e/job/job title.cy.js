describe('verify job functionality', () => {

    it('verify user able to add job title  with manditory details ', () => {
    
          cy.login()
            cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(1) > a').click()
            cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-body > nav > ul > li:nth-child(2) > span > i').click()
            cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-body > nav > ul > li.--active.oxd-topbar-body-nav-tab.--parent > ul > li:nth-child(1) > a').click()
    
            cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div.orangehrm-header-container > div > button').click()

            let r = (Math.random() + 1).toString(36).substring(7);
            cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2) > input').type("qa testing+r")
            cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-actions > button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space').click()
            cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context').should("be.visible")
    
        
        })
        it('verify user able to add job title with duplicate name ', () => {
    
            cy.login()
              cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(1) > a').click()
              cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-body > nav > ul > li:nth-child(2) > span > i').click()
              cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-body > nav > ul > li.--active.oxd-topbar-body-nav-tab.--parent > ul > li:nth-child(1) > a').click()
      
              cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div.orangehrm-header-container > div > button').click()
              cy.get("#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2) > input").type("qa testing")
            cy.contains('Already exists').should("be.visible")

    })

    
    
    it('verify job title with more than 100 chaacters ', () => {

      cy.login()
      cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(1) > a').click()
      cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-body > nav > ul > li:nth-child(2) > span > i').click()
      cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-body > nav > ul > li.--active.oxd-topbar-body-nav-tab.--parent > ul > li:nth-child(1) > a').click()

      cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div.orangehrm-header-container > div > button').click()
      cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2) > input').type("wertyuiop[asdfghjklzxcvbnm,wertyuiop[asdfghjklzxcvbnm,ertyuiop[asdfghjklzxcvbnm,wertyuiop[asdfghjklzi")
      cy.contains('Should not exceed 100 characters').should("be.visible")
    })

    it('verify job title with out job title ', () => {
      cy.login()
      cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(1) > a').click()
      cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-body > nav > ul > li:nth-child(2) > span > i').click()
      cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-body > nav > ul > li.--active.oxd-topbar-body-nav-tab.--parent > ul > li:nth-child(1) > a').click()

      cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div.orangehrm-header-container > div > button').click()
      cy.get('textarea[placeholder="Type description here"]').type("tfyguihojk")
      cy.contains(' Save ').should("be.visible")
      cy.contains('Required').should("be.visible")
    })

   

})