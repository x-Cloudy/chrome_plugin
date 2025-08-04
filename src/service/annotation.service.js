export class AnnotationService {
  async get() {
    return new Promise((resolve, reject) => {
      window.postMessage({
        type: 'EXTENSION_ANNOTATION_GET',
        payload: null
      }, '*');

      const listener = (event) => this.messageListener({
        event,
        type: 'EXTENSION_ANNOTATION_GET_RESPONSE',
        promise: { resolve, reject },
        listener
      });

      window.addEventListener('message', listener);
    });
  }

  async post(data) {
    return new Promise((resolve, reject) => {
      window.postMessage({
        type: 'EXTENSION_ANNOTATION_POST',
        payload: data
      }, '*');

      const listener = (event) => this.messageListener({
        event,
        type: 'EXTENSION_ANNOTATION_POST_RESPONSE',
        promise: { resolve, reject },
        listener
      });

      window.addEventListener('message', listener);
    });
  }

  async put(id, data) {
    return new Promise((resolve, reject) => {
      window.postMessage({
        type: 'EXTENSION_ANNOTATION_PUT',
        payload: { id, data }
      }, '*');

      const listener = (event) => this.messageListener({
        event,
        type: 'EXTENSION_ANNOTATION_PUT_RESPONSE',
        promise: { resolve, reject },
        listener
      });

      window.addEventListener('message', listener);
    });
  }

  async delete(id) {
    return new Promise((resolve, reject) => {
      window.postMessage({
        type: 'EXTENSION_ANNOTATION_DELETE',
        payload: { id }
      }, '*');

      const listener = (event) => this.messageListener({
        event,
        type: 'EXTENSION_ANNOTATION_DELETE_RESPONSE',
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