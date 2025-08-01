class ExtensionMessageHandler {
  constructor() {
    this.setupListeners();
  }

  setupListeners() {
    this.registerMessage({ type: 'PUT_FILTERS', usePayload: true });
    this.registerMessage({ type: 'DELETE_FILTERS', usePayload: true });
    this.registerMessage({ type: 'POST_FILTERS', usePayload: true });
    this.registerMessage({ type: 'GET_FILTERS' });
    this.registerMessage({ type: 'EXTENSION_ME', runtimeType: 'ME' });
    this.registerMessage({ type: 'EXTENSION_LOGIN', runtimeType: 'LOGIN', usePayload: true });
    this.registerMessage({
      type: 'EXTENSION_QUOTE_CREATE',
      runtimeType: 'QUOTE_CREATE',
      usePayload: true,
      postResponse: false,
      responseType: 'EXTENSION_QUOTE_CREATE_RESPONSE'
    });
    this.registerMessage({ type: 'EXTENSION_ANNOTATION_GET', runtimeType: 'ANNOTATION_GET' });
    this.registerMessage({ type: 'EXTENSION_ANNOTATION_POST', runtimeType: 'ANNOTATION_POST', usePayload: true });
    this.registerMessage({ type: 'EXTENSION_ANNOTATION_PUT', runtimeType: 'ANNOTATION_PUT', usePayload: true });
    this.registerMessage({ type: 'EXTENSION_ANNOTATION_DELETE', runtimeType: 'ANNOTATION_DELETE', usePayload: true });

    this.registerCustom('EXTENSION_LOGOUT', this.handleLogout);
    this.registerCustom('GET_TOKEN', this.handleGetToken);
    this.registerCustom('EXTENSION_FETCH_IMAGE', this.handleFetchImage);
  }

  registerMessage({
    type,
    runtimeType = type,
    usePayload = false,
    postResponse = true,
    responseType = `${type}_RESPONSE`
  }) {
    window.addEventListener('message', (event) => {
      if (event.data.type !== type) return;

      const message = { type: runtimeType };
      if (usePayload) message.payload = event.data.payload;

      chrome.runtime.sendMessage(message, (response) => {
        if (postResponse) {
          window.postMessage({
            type: responseType,
            payload: response
          }, '*');
        }
      });
    });
  }

  registerCustom(type, handler) {
    window.addEventListener('message', (event) => {
      if (event.data.type === type) {
        handler(event);
      }
    });
  }

  handleLogout = async () => {
    await chrome.storage.local.clear();
    window.postMessage({
      type: 'EXTENSION_LOGOUT_RESPONSE',
      payload: { success: true, mensage: 'Usúario desconectado' }
    }, '*');
  };

  handleGetToken = async () => {
    const result = await chrome.storage.local.get(['token']);
    const token = result?.token || null;

    window.postMessage({
      type: 'GET_TOKEN_RESPONSE',
      payload: token
    }, '*');
  };

  handleFetchImage = (event) => {
    const { payload } = event.data;
    if (!payload?.url) return;

    chrome.runtime.sendMessage({
      type: 'FETCH_IMAGE',
      payload
    }, (response) => {
      if (response.success) {
        const img = document.querySelector('#' + payload.id);
        if (img) {
          console.log('carregou imagem');
          img.src = response.data;
        }
      }
    });
  };
}

const waitForElement = (selector) => {
  return new Promise(resolve => {
    const interval = setInterval(() => {
      const el = document.querySelector(selector);
      if (el) {
        clearInterval(interval);
        resolve(el);
      }
    }, 100);
  });
};

const injectReact = async () => {
  console.log('app running')

  const side_bar = document.createElement('div');
  const current_extension_page = document.createElement('div');

  current_extension_page.id = 'current_extension_page';
  side_bar.id = 'extension-side-bar';

  document.body.appendChild(side_bar);

  await waitForElement('._aig-._as6h').then(el => {
    if (el) {
      el.style.display = 'flex';
      el.style.flexWrap = 'nowrap';
    }
    el.appendChild(current_extension_page)
  });

  try {
    const main_div = document.querySelector('#app');
    main_div.style.padding = '50px 55px 0px 0px'

    const manifest = await fetch(chrome.runtime.getURL('asset-manifest.json'))
      .then(res => res.json());

    const cssPath = manifest.files["main.css"].replace('./', '');
    const jsPath = manifest.files["main.js"].replace('./', '');

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = chrome.runtime.getURL(cssPath);
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = chrome.runtime.getURL(jsPath);
    document.head.appendChild(script);

  } catch (error) {
    console.error('Erro ao carregar extensão:', error);
  }
};

new ExtensionMessageHandler();

setTimeout(injectReact, 3000);