class addEmployeePage{

    addEmployeeSubMenuItem(){

        return 'Add Employee'
    }

    firstNameInput(){

        return 'input[name="firstName"]'
    }

    lastNameInput(){

        return 'input[name="lastName"]'
    }

    saveBtn(){

        return 'button[type="submit"]'
    }

    successMessage(){

        return 'Successfully Saved'
    }


   
}

const addemployee = new addEmployeePage()

export default addemployee