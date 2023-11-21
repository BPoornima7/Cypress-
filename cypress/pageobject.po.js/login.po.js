class loginPage{


    userName(){

      return '//input[@placeholder="Username"]'
    }

    password(){

      return 'input[placeholder="Password"]'
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