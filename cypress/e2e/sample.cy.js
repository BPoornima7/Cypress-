describe('',()=>{
    it('',()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('.oxd-sheet').then((txt)=>{
        const content = txt.text()
        cy.log(content)
        expect(content).to.eq('Username : AdminPassword : admin123')
    })
    })
})