
// import data from '../fixtures/sample.json'
// describe('suitename',()=>{
//     it('testname',()=>{

//         cy.get(locator).type(data.Username)
//         cy.get(locator).type(data.City)

//         cy.get(locator).click({force:true})
   
//     })
// })

// //npx cypress run --config-file "filename"


// cy.get("li").contains("ABC").each((txt)=>{


//     var text = txt.text()

//     cy.log(text)
// })


describe('visit url',()=>{
    it('verify',()=>{
       cy.visit('https://www.amazon.in/?tag=msndeskstdin-21&ref=pd_sl_3uomlq3wa5_e&adgrpid=1323813657261162&hvadid=82738617292972&hvnetw=o&hvqmt=e&hvbmt=be&hvdev=c&hvlocint=&hvlocphy=116072&hvtargid=kwd-82739282699753:loc-90&hydadcr=5625_2377262 ')
       cy.url().should('include','https://www.amazon.in/')
   })   
   })
