// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

require('@4tw/cypress-drag-drop')

Cypress.Commands.add('login', () => {

  cy.visit('https://opensource-demo.orangehrmlive.com/')
  cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input').type("Admin")
  cy.get('input[placeholder="Password"]').type("admin123")
  cy.get('button[type="submit"]').click()
  //Assertions #app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div.orangehrm-header-container > div > button

  cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')



  //or

  cy.contains('Dashboard').should('be.visible')
  cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(1) > a').click()
  cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-body > nav > ul > li:nth-child(2) > span > i').click()


})



Cypress.Commands.add('employmentstatus', () => {

  cy.visit('https://opensource-demo.orangehrmlive.com/')
  cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input').type("Admin")
  cy.get('input[placeholder="Password"]').type("admin123")
  cy.get('button[type="submit"]').click()
  //Assertions #app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div.orangehrm-header-container > div > button

  cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

  //or

  cy.contains('Dashboard').should('be.visible')
  cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(1) > a').click()
  cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-body > nav > ul > li:nth-child(2) > span > i').click()



  cy.contains('Employment Status').click()
  cy.contains(' Add ').click()



})

Cypress.Commands.add('categories', () => {

  cy.login()
  cy.contains('Job Categories').click()
  cy.contains('Add').click()



})
Cypress.Commands.add('try', (username, password) => {

  cy.visit('https://opensource-demo.orangehrmlive.com/')
  cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input').type(username)
  cy.get('input[placeholder="Password"]').type(password)
  cy.get('button[type="submit"]').click()
  //Assertions #app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div.orangehrm-header-container > div > button

  cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

})
