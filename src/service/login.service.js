export class LoginService {
  async login({ email, password }) {
    return new Promise((resolve, reject) => {
      window.postMessage({
        type: 'EXTENSION_LOGIN',
        payload: { email, password }
      }, '*');

      const listener = (event) => this.messageListener({
        event,
        type: 'EXTENSION_LOGIN_RESPONSE',
        promise: { resolve, reject },
        listener
      });

      window.addEventListener('message', listener)
    });
  }

  async logout() {
    return new Promise((resolve, reject) => {
      window.postMessage({
        type: 'EXTENSION_LOGOUT',
        payload: null,
      }, '*');

      const listener = (event) => this.messageListener({
        event,
        type: 'EXTENSION_LOGOUT_RESPONSE',
        promise: { resolve, reject },
        listener
      });

      window.addEventListener('message', listener)
    })
  }

  async me() {
    return new Promise((resolve, reject) => {
      window.postMessage({
        type: 'EXTENSION_ME',
        payload: null
      }, '*');

      const listener = (event) => this.messageListener({
        event,
        type: 'EXTENSION_ME_RESPONSE',
        promise: { resolve, reject },
        listener
      });

      window.addEventListener('message', listener)
    });
  }

  async getToken() {
    return new Promise((resolve, reject) => {
      window.postMessage({
        type: 'GET_TOKEN',
        payload: null
      }, '*');

      const listener = (event) => this.messageListener({
        event,
        type: 'GET_TOKEN_RESPONSE',
        promise: { resolve, reject },
        listener,
        token: true
      });

      window.addEventListener('message', listener)
    })
  }


  messageListener({ event, type, promise, listener, token }) {
    if (event.data.type === type) {
      window.removeEventListener('message', listener);

      if (token) {
        if (event.data.payload) {
          promise.resolve(event.data.payload);
        } else {
          promise.reject();
        }
        return
      }

      if (event.data.payload.success) {
        promise.resolve(event.data.payload.data);
      } else {
        promise.reject(event.data.payload);
      }
    }
  }
}