class addEmployeePage{

    addEmployeeSubMenuItem(){

        return 'Add Employee'
    }

    firstNameInput(){

        return 'input[name="firstName"]'
    }

    lastNameInput(){
        // new changes

        return 'input[name="lastName"]'
    }

    saveBtn(){

        return 'button[type="submit"]'
    }

    successMessage(){

        return 'Successfully Saved'
    }


    createEmployee(firstname, lastname){

        cy.contains(this.addEmployeeSubMenuItem()).click()

        cy.get(this.firstNameInput()).type(firstname)

        cy.get(this.lastNameInput()).type(lastname)

        cy.get(this.saveBtn()).click()

        cy.contains(this.successMessage()).should('be.visible')


    }

}

const employeedata=new addEmployeePage()
export default employeedata

