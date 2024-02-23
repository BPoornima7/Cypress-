
describe("",()=>{
    it("",()=>{




  
cy.on('uncaught:exception', () => {
    
      return false
    });


cy.request({
    method: "POST",
    url:'https://reqres.in/api/users',
    headers:{

    },
body:
    {"name":"test",
    "salary":"123",
    "age":"23"},
    
   
}).then((response)=>{
expect(response.body.age).to.eq(
    "23")
    cy.screenshot('yes')
// expect(response.body).to.have.property("message", 
// "Successfully! Record has been added."
   
// )
console.log(response.body)
})
  
})




})