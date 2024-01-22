

describe('orangae hrm',function(){
it('add emply',function(){

cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
cy.get('input[name="username"]').type("Admin")
cy.get('input[type="password"]').type("admin123")
cy.get('button[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click()
cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

//cy.get('a[class="oxd-main-menu-item active"]').should('be.visible')


cy.contains("PIM").click()
cy.contains('Add Employee').click()
cy.get('input[name="firstName"]').type('poornima')
cy.get('input[class="oxd-input oxd-input--active orangehrm-lastname"]').type('bandappa')
//cy.get('input[class="oxd-input oxd-input--active"]').type('049')
cy.contains('Save').click()







})




})