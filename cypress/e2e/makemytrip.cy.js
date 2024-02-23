describe('ghfgf',()=>{
    it('nvhvhk',()=>{
        cy.visit("https://www.makemytrip.com",{ responseTimeout: 120000 })


        
        
        

        cy.get('input[placeholder="From"]').type("Bengaluru, India")
        cy.get("#react-autowhatever-1-section-0-item-0 div div p").first().click()
        
        cy.get('[placeholder="To"]').type("Hyderabad")
        
        cy.get("#react-autowhatever-1-section-0-item-0 div div p").first().click()
        
        cy.get(".flt_fsw_inputBox dates inactiveWidget activeWidget").click()
    
})
})