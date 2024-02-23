import login from "../../pageobject.po.js/login.po"
import dashboard from "../../pageobject.po.js/dashbord.po"
import addemployee from "../../pageobject.po.js/addemployee.po"
import logindata from "../../fixtures/logindata.json"




const availablefixtures = [
    {
        "name": "assigniment/emp1",
        "context": "aravind"
    },
    {
        "name":"assigniment/emp2",
        "context": "nishika"
    },
    {
        "name": "assigniment/emp3",
        "context": "raju"

    },
    {
        "name": "assigniment/emp4",
        "context": "ramya"

    },
    {
        "name": "assigniment/emp5",
        "context": "teja"

    }



]

describe('Automation Test Suite - create employees', function(){
    
    availablefixtures.forEach((afixture) => {
        describe(afixture.context, () => {
            
            before(function () {
                cy.fixture(afixture.name).then(function (data) {
                    this.data = data;
                })
            })

            it('Cypress Test Case - add employee', function () {
               
                cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

                cy.xpath(login.userName()).type(logindata.username)
                cy.get(login.password()).type(logindata.Password)
                cy.get(login.loginBtn()).click()
                //Assertions 
        
                cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        
                //or
        
                cy.url().should('include', 'web/index.php/dashboard/index')
        
                //or
        
                cy.contains(dashboard.dashboardpage()).should('be.visible')
        
                cy.contains(dashboard.pim).click()

                cy.contains(addemployee.addEmployeeSubMenuItem()).click()

                cy.get(addemployee.firstNameInput()).type( this.data.firstname)
    
                cy.get(addemployee.lastNameInput()).type( this.data.lastname)
    
                cy.get(addemployee.saveBtn()).click()
    
                cy.contains(addemployee.successMessage()).should('be.visible')
            
       
                
        
        
            })

        })
    })
})

