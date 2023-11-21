
import logindata from '../../fixtures/login.json'
describe('verify login functionalities', () => {
    it.only('verify login fuctionality with valid details', () => {
        cy.try(logindata.username, logindata.Password)
    })


})