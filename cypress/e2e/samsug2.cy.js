describe("", () => {
    beforeEach('',()=>{
    
        cy.visit("https://demoblaze.com/index.html")
      
    })
    
        it("verify samsung", () => {
           
    
            const mobileName1 = 'Samsung galaxy s6'
            const mobileName2 = 'Nokia lumia 1520'
            const DynamicLocator = `//a[text()='${mobileName1}']`
            const DynamicLocato = `//a[text()='${mobileName2}']`
            
    
            cy.xpath(DynamicLocator).click()
            // cy.pause()
            cy.contains("Add to cart").click()
            cy.get('#cartur').click()
            cy.contains('Home ').click()
            cy.xpath(DynamicLocato).click()
            // cy.pause()
            cy.contains("Add to cart").click()
            cy.get('#cartur').click()

            cy.get('[id="tbodyid"] td:nth-child(2)').then((res) => {
    
                const value = res.text()
                cy.log(value)
                //expect(value).to.eq(mobileName1)
                expect(value).to.nested.include(mobileName1)
                // cy.pause()
                

            })
            cy.get('[id="tbodyid"] td:nth-child(2)').then((res) => {
    
                const value = res.text()
                cy.log(value)
                // expect(value).to.eq(mobileName2)
                expect(value).to.nested.include(mobileName2)
                

            })

    
           
    
    
        
        
        })
    
    
    })