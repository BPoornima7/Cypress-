describe('', () => {
Cypress.on('uncaught:exception',()=>{
    return false;
})

    it('', () => {
        cy.visit('https://www.ksrtc.in/oprs-web/')
        cy.get('#navbarCollapse ul li:nth-child(2)').invoke('remove', 'target').click()

        cy.get('[src="/oprs-web/_assets/images/web/app-store-2.png"]').click()
//if it change the tab we need to use origin
        cy.origin('https://apps.apple.com',()=>{
            //cy.url().should('eq','https://apps.apple.com/us/app/ksrtc-awatar/id1250082402?ign-mpt=uo%3D4')
            cy.visit('https://apps.apple.com/us/app/ksrtc-awatar/id1250082402?ign-mpt=uo%3D4')


           
           
            //to get link count


         cy.get('[class="product-header__title app-header__title"]').should('contain.text','AWATAR')
         cy.get('a').its('length').then((element) => {
            const y = element;
            console.log(y);
           // expect(y).to.equal(40);
        });


        //to get link name

        cy.get('a').each(($link) => {
            cy.log($link.text());
          });
          //to get 1 name of the link
          cy.get('a').eq(5).then(($link) => {
            var ele = $link.text()
            cy.log(ele);
            cy.writeFile('cypress/note/links.txt',ele)
          });
          


        })

     


    })

})