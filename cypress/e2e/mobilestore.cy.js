 ///<reference types="Cypress"/>
//import products from "../fixtures/products.json"
//import ProductPage from "../page/ProductPage.po"
import productPage from "../pageobject.po.js/productpage.po"
import products from "../fixtures/products.json"
//const productPage = new ProductPage()
describe('pick the mobile in the store', () => {
   // var sum = 0
    it('verify the products in the store', () => {
        cy.visit("https://demoblaze.com/index.html")
        cy.get("a#nava").contains("PRODUCT STORE")
        // get all the mobile names in the page and assign to variable "mobileName" 
        cy.get('a[class="hrefch"]').then(($el) => {
            const mobileName = $el.text()
            cy.log(mobileName)
           // cy.login()
           // cy.pause()
            if (products.prdocuts1.includes(mobileName)) {
                cy.log('This is "' + mobileName + '"')
                //clickAdd1 locator is in productPage ,this locator is for click the 
                //particular name as per products.prdocuts1 names in fixture file
                productPage.clickAdd1(mobileName).click()
                //click addtocart button
                cy.get('.col-sm-12 > .btn').click()
                //click Home button
                cy.get('.active > .nav-link').click()

            }
        })

        //click cart button
        cy.get(':nth-child(4) > .nav-link').click()
        cy.wait(3000)
        
        // get all the price value in the cart 
        cy.get('#tbodyid>tr>td:nth-child(3)').each((price) => {
            const totalPrise = price.text();
            let res = Number(totalPrise)
            cy.log(res)
            //sum = sum + res
            //cy.log(sum)
        })
        cy.get('#totalp').each((price1) => {
            const totalPrise1 = price1.text();
            var res = Number(totalPrise1)
            expect(sum).to.equal(res)
        })
    })
})