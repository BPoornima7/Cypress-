


describe('Automation - API Automation - GET. PUT, POST and Delete Methods', function () {

it.only('Cypress Test Case - Understanding POST Method', function () {



    const payload = {
      "name": "Raju",
      "job": "Trainer"
    }

    cy.request('POST', 'https://reqres.in/api/users', payload).then((response) => {

      expect(response.status).equal(201);
      expect(response.body).to.have.property("name", "Raju")

      expect(response.body).to.have.property("job", "Trainer")

       var time = JSON.stringify(response.body.createdAt)
       var x = JSON.stringify(response.body.id)

      cy.log(time)
      cy.log(x)

       cy.writeFile('cypress/fixtures/module1/test10.json', { "Id": x })
    

    })

  })
})