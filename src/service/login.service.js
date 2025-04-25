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

  messageListener({ event, type, promise, listener }) {
    if (event.data.type === type) {
      window.removeEventListener('message', listener);

      if (event.data.payload.success) {
        promise.resolve(event.data.payload.data);
      } else {
        promise.reject(event.data.payload);
      }
    }
  }
}