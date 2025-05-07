class Lead {
  constructor() {
    this.URL = 'https://api.bpcruzeiros.com/admin';
  }

  async createQuote(form) {
    console.log('form', form)
    return new Promise((resolve, reject) => {
      window.postMessage({
        type: "EXTENSION_QUOTE_CREATE",
        payload: {
          token: this.token,
          form
        }
      })

      window.addEventListener('message', (event) => {
        if (event.data.type === 'EXTENSION_QUOTE_CREATE_RESPONSE') {
          resolve();
        }
      })
    })
  }
}

const leadService = new Lead()
export default leadService;