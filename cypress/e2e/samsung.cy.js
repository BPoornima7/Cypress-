describe("", () => {
beforeEach('',()=>{

    cy.visit("https://demoblaze.com/index.html")
   
})
afterEach('',()=>{
    cy.contains('Home ').click()

})

    it("verify samsung", () => {
       

        const mobileName1 = 'Samsung galaxy s6'
        const DynamicLocator = `//a[text()='${mobileName1}']`
        cy.log(DynamicLocator)

        cy.xpath(DynamicLocator).click()
        // cy.pause()
        cy.contains("Add to cart").click()
        cy.get('#cartur').click()
        cy.get('#tbodyid tr td:nth-child(2)').then((res) => {

            const value = res.text()
            cy.log(value)
            expect(value).to.eq(mobileName1)
        })

       


    })
    it(" verify nokia", () => {
        // cy.visit("https://demoblaze.com/index.html")

        const mobileName2 = 'Nokia lumia 1520'
        const DynamicLocator = `//a[text()='${mobileName2}']`
        cy.log(DynamicLocator)

        cy.xpath(DynamicLocator).click()
        // cy.pause()
        cy.contains("Add to cart").click()
        cy.get('#cartur').click()
        cy.get('#tbodyid tr td:nth-child(2)').then((res) => {

            const value = res.text()
            cy.log(value)
            expect(value).to.eq(mobileName2)
        })

       


    })


})