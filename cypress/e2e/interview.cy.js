
import data from '../fixtures/sample.json'
describe('suitename',()=>{
    it('testname',()=>{

        cy.get(locator).type(data.Username)
        cy.get(locator).type(data.City)

        cy.get(locator).click({force:true})
   
    })
})

//npx cypress run --config-file "filename"


cy.get("li").contains("ABC").each((txt)=>{


    var text = txt.text()

    cy.log(text)
})