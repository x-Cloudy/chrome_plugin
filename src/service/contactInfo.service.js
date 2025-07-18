export class ContactInfoService {
  async store(data) {
    return new Promise((resolve, reject) => {
      window.postMessage({
        type: 'EXTENSION_CONTACT_INFO_STORE',
        payload: data
      }, '*');

      const listener = (event) => this.messageListener({
        event,
        type: 'EXTENSION_CONTACT_INFO_STORE_RESPONSE',
        promise: { resolve, reject },
        listener
      });

      window.addEventListener('message', listener);
    });
  }

  async show(id) {
    return new Promise((resolve, reject) => {
      window.postMessage({
        type: 'EXTENSION_CONTACT_INFO_SHOW',
        payload: { id }
      }, '*');

      const listener = (event) => this.messageListener({
        event,
        type: 'EXTENSION_CONTACT_INFO_SHOW_RESPONSE',
        promise: { resolve, reject },
        listener
      });

      window.addEventListener('message', listener);
    });
  }

  async update(id, data) {
    return new Promise((resolve, reject) => {
      window.postMessage({
        type: 'EXTENSION_CONTACT_INFO_UPDATE',
        payload: { id, data }
      }, '*');

      const listener = (event) => this.messageListener({
        event,
        type: 'EXTENSION_CONTACT_INFO_UPDATE_RESPONSE',
        promise: { resolve, reject },
        listener
      });

      window.addEventListener('message', listener);
    });
  }

  async delete(id) {
    return new Promise((resolve, reject) => {
      window.postMessage({
        type: 'EXTENSION_CONTACT_INFO_DELETE',
        payload: { id }
      }, '*');

      const listener = (event) => this.messageListener({
        event,
        type: 'EXTENSION_CONTACT_INFO_DELETE_RESPONSE',
        promise: { resolve, reject },
        listener
      });

      window.addEventListener('message', listener);
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