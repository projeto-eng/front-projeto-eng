class LoginService {
    constructor(id = '') {
        if (LoginService.instance) {
            return LoginService.instance;
        }
        this.id = id;
        LoginService.instance = this;
    }

    login = (id) => {
        this.id = id;
    }

    logout = () => {
        this.id = '';
    }

    get loggedIn() {
        return this.id !== '';
    }
}

export default LoginService;