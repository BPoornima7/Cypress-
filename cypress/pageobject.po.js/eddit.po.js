
class editname{
    list(){
        return 'Employee List'
    }

    nameType(){
       return '[placeholder="Type for hints..."]'
       
    }

    search(){
        return 'button[type="submit"]'
    }

    nameSearch(){
        return 'div[class="oxd-table-cell oxd-padding-cell"]'
    }

    editMe(){
        return '[class="oxd-icon-button oxd-table-cell-action-space"]'
    }

    middle(){
        return '[placeholder="Middle Name"]'
    }

    save(){
        return '[type="submit"]'
    }

    deleteMe(){
        return '[class="oxd-icon bi-trash"]'
    }

    yes=' Yes, Delete '

    delete(){
        return 'Successfully Deleted'
    }

    assert(){
        return '[class="orangehrm-edit-employee-name"]'
    }
   

}

    const change =new editname()

export default change;

