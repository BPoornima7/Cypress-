class loginPage{


    admin(){

      return '[placeholder="Username"]'
    }

    password(){

      return '[placeholder="Password"]'
    }

    loginBtn(){

      return 'button[type="submit"]'
    }

    loginErrorMessage(){

      return 'Invalid credentials'
    }
}

const login = new loginPage()

export default login