

import dashboard from '../pageobject.po.js/dashbord.po'
import employeedata from '../pageobject.po.js/addemploye22.po'
import emp1 from '../fixtures/assigniment/emp1.json'
import change from '../pageobject.po.js/eddit.po'

describe('create employe', () => {
    Cypress.on('uncaught:exception', () => {
        return false
    })
    it('and verify', () => {
        cy.log()
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        //cy.url().should('include', 'web/index.php/dashboard/index')
        cy.contains(dashboard.dashboardpage()).should('be.visible')
        cy.contains(dashboard.pim).click()
        let r = (Math.random() + 1).toString(36).substring(7)
        employeedata.createEmployee(emp1.firstname + r, emp1.lastname + r)
        
        //verify/edit
        cy.contains(change.list()).click()
        cy.get(change.nameType()).eq(0).type(emp1.firstname + r)
        cy.get(change.search()).click()
        cy.get(change.editMe()).last().click()
        cy.get(change.assert()).should('have.text', emp1.firstname + r + ' ' + emp1.lastname + r)
        cy.get(change.middle()).type(emp1.middle)
        cy.get(change.save()).eq(0).click()
    
        //delete
        cy.contains(change.list()).click()
        cy.get(change.nameType()).eq(0).type(emp1.firstname + r)
        cy.get(change.search()).click()
        cy.get(change.deleteMe()).eq(0).click()
        cy.contains(change.yes).click()
        cy.contains(change.delete()).should('be.visible')
    
    })
})





