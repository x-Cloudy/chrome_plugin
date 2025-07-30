export default class Fetch {
  listenerHandler = ({ response, type, resolve, listener }) => {
    if (response.data.type === type + '_RESPONSE') {
      window.removeEventListener('message', listener);
      resolve(response.data.payload)
    }
  }

  get(type) {
    return new Promise((resolve) => {
      window.postMessage({
        type: type
      }, '*');

      const listener = (response) => {
        this.listenerHandler({ response, type, resolve, listener });
      }
      window.addEventListener('message', listener);
    })
  }

  post(type, payload) {
    return new Promise((resolve) => {
      window.postMessage({
        type: type,
        payload: payload
      }, '*');

      const listener = (response) => {
        this.listenerHandler({ response, type, resolve, listener });
      }
      window.addEventListener('message', listener);
    })
  }

  delete(type, payload) {
    return new Promise((resolve) => {
      window.postMessage({
        type: type,
        payload: payload
      }, '*');

      const listener = (response) => {
        this.listenerHandler({ response, type, resolve, listener });
      }
      window.addEventListener('message', listener);
    })
  }

  put(type, payload) {
    return new Promise((resolve) => {
      window.postMessage({
        type: type,
        payload: payload
      }, '*');

      const listener = (response) => {
        this.listenerHandler({ response, type, resolve, listener });
      }
      window.addEventListener('message', listener);
    })
  }
}