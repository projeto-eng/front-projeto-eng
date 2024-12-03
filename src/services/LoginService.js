let instance;

class LoginService {
    constructor(id = '') {
        if (instance) {
            return instance;
        }
        instance = this;
        this.id = this.getCookie('loginServiceId') || id;
        console.log('LoginService id:', this.id);
        this.subscribers = [];
    }

    login = (id) => {
        this.id = id;
        this.setCookie('loginServiceId', id, 7); // Cookie expira em 7 dias
        this.notifySubscribers();
    }

    logout = () => {
        this.id = '';
        this.setCookie('loginServiceId', '', -1); // Expira cookie
        this.notifySubscribers();
    }

    get isLoggedIn() {
        return this.id !== '';
    }

    subscribe(callback) {
        this.subscribers.push(callback);
    }

    notifySubscribers() {
        this.subscribers.forEach(callback => callback());
    }

    setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/;SameSite=None;Secure";
    }

    getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
}

let loginServiceInstance = new LoginService();

export default loginServiceInstance;