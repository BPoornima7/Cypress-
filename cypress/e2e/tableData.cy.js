describe('date of the table',()=>{
    it('to get perticular cell data',()=>{
        cy.visit('https://money.rediff.com/indices/bse/sensex?src=moneyhome_bseIndices')

        cy.get('[class="dataTable"]>tbody>tr:nth-child(5)').within(()=>{
        
        cy.get('td').eq(3).then((txt)=>{
            var val = txt.text()
            cy.log(val)
            cy.writeFile('cypress/fixture/table.txt',val)
        })
    })
    
    })
})