let instance;

class ServerService {
    constructor(baseURL = 'http://127.0.0.1:8080') {
        if (instance) {
            return instance;
        }
        this.baseURL = baseURL;
        instance = this;
    }

    async request(endpoint, method = 'GET', body = null, headers = {}) {
        const config = {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...headers
            }
        };

        if (body) {
            config.body = JSON.stringify(body);
        }

        try {
            const response = await fetch(`${this.baseURL}${endpoint}`, config);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error making request:', error);
            throw error;
        }
    }

    get(endpoint, headers = {}) {
        return this.request(endpoint, 'GET', null, headers);
    }

    post(endpoint, body, headers = {}) {
        return this.request(endpoint, 'POST', body, headers);
    }

    put(endpoint, body, headers = {}) {
        return this.request(endpoint, 'PUT', body, headers);
    }

    delete(endpoint, headers = {}) {
        return this.request(endpoint, 'DELETE', null, headers);
    }
}

let ServerServiceInstance = Object.freeze(new ServerService());

export default ServerServiceInstance;