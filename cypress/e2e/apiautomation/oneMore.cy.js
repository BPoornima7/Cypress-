// describe('orsngr hrm',()=>{
//     it('api test case hrm',()=>{

// const employeeId = '0330';

//         cy.request({
//             method:'DELETE',
//             url:'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees',
//             headers:{
//                'cookie':'orangehrm=e459edcdefb07bbdf85b3b954fcbdd35',
//                'Host':'opensource-demo.orangehrmlive.com',
//                'Referer':'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList'
               
//                },
//                body:{}
                  
               

//     }).then((response)=>{
//       var Root=response.body

//         expect(response.status).to.equal(200)
//         //except(Root.name).to.have.property('raju')
//         expect(Root.firstname).to.equal('raju')
//     })
    


    
//     })
// })

describe('orsngr hrm', () => {
    it('api test case hrm', () => {
       // const employeeId = '0330';

        cy.request({
            method: 'DELETE',
            url: `https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees`,
            headers: {
               'cookie': 'orangehrm=e459edcdefb07bbdf85b3b954fcbdd35',
               'Host': 'opensource-demo.orangehrmlive.com',
               'Referer': 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList'
            },
            
            body:{
    
          'ids': [120]
               }
        }).then((response) => {
            expect(response.status).to.equal(200);
            // Optionally, check the response body for any specific data
            // This might not be necessary for a DELETE request
        });
    });
});
