
import data from '../fixtures/login.json'

describe('verify login functionalities', () => {


    var username="Admin"
    var password="admin123"
    it('verify login gunction', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input').type(username)
          cy.get('input[placeholder="Password"]').type(password)
          cy.get('button[type="submit"]').click()
          //Assertions #app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div.orangehrm-header-container > div > button
    
          cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
          
          
       
      
    })
  


var username="Admin"
var password="admin123"
it('verify login try var', () => {
    cy.try(username,password)






})
  

it.only('verify login try data', () => {
    cy.try(data.username, data.password)

})
})



