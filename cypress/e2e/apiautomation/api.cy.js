
describe('Automation - API Automation - GET. PUT, POST and Delete Methods', function () {
   
    
    it.only('Cypress Test Case - Understanding GET Method', function () {
  
      cy.request({
  
        method:'GET', 
        url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC',
        headers:{
  
          "Cookie":"orangehrm=6c4f972f4756020923bd448768ff285c",
          "Host":"opensource-demo.orangehrmlive.com",
          "Referer":"https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList"
        },
        body:{}  
        
  
      }).then((response) => {
  
        expect(response.status).equal(200);
       
  
        cy.writeFile("cypress/fixtures/rest.txt",response)
  
       
      })
    })
})
  
    

  
  