describe('make my trip',()=>{
    // beforeEach( ()=> {
    //     cy.exec('RAILS_ENV=test bin/rake cypress:fixtures')
    //   })

    it('flight',()=>{


        cy.visit('https://www.makemytrip.com/',{
            onBeforeLoad: win => {
              win.sessionStorage.clear();
            }
          })
    
    })
})