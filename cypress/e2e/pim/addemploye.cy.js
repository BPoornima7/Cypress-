import login from "../../pageobject.po.js/login.po"
import dashboard from "../../pageobject.po.js/dashbord.po"
import employeedata from "../../pageobject.po.js/addemploye22"
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
        "name":"assigniment/emp5",
        "context": "teja"

    }



]

describe('Automation Test Suite - create employees', function(){
    //loop through both the fixtues 
    availablefixtures.forEach((afixture) => {
        describe(afixture.context, () => {
            //Mostly used for Setup Part
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

                
                employeedata.createEmployee( this.data.firstname,this.data.lastname)
                
        
        
            })

        })
    })
})

