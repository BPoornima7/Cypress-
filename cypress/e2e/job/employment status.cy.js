describe('verify job functionalities', () => {


    
    it('verify user able to add employment status  with manditary details ', () => {

        cy.employmentstatus()

        let r = (Math.random() + 1).toString(36).substring(7);

        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-row > div > div:nth-child(2) > input').type("status" + r)
        cy.contains(' Save ').click()
        cy.contains('Successfully Saved').should("be.visible")



    })



    it('verify user able to add employment status above 50 characters ', () => {

        cy.employmentstatus()
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-row > div > div:nth-child(2) > input').type("wertyuiop[asdfghjklzxcvbnm,wertyuiop[asdfghjklzxcvbnm,")
        cy.contains('Should not exceed 50 characters').should('be.visible')

    })

    it('verify user able to click on cancle', () => {

        cy.employmentstatus()
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-row > div > div:nth-child(2) > input').type("wertyuiop[asdfghjklzxcvbnm,wertyuiop[asdfghj,")
        cy.contains(' Cancel ').click()
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/employmentStatus')
        cy.contains('Job ').should('be.visible')

    })
})
