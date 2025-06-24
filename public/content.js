const injectReact = async () => {
  console.log('app running')

  const side_bar = document.createElement('div');

  side_bar.id = 'extension-side-bar';

  document.body.appendChild(side_bar);

  try {
    const main_div = document.querySelector('#app');
    main_div.style.padding = '50px 60px 0px 0px'
    
    if (main_div) {
      console.log('main div', main_div);
    }

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

window.addEventListener('message', (event) => {
  if (event.data.type === 'EXTENSION_LOGIN') {

    chrome.runtime.sendMessage({
      type: 'LOGIN',
      payload: event.data.payload
    }, (response) => {
      window.postMessage({
        type: 'EXTENSION_LOGIN_RESPONSE',
        payload: response
      }, '*');
    });
  }
});

window.addEventListener('message', async (event) => {
  if (event.data.type === 'EXTENSION_LOGOUT') {
    await chrome.storage.local.clear();

    window.postMessage({
      type: 'EXTENSION_LOGOUT_RESPONSE',
      payload: { success: true, mensage: 'Usúario desconectado' }
    }, '*')
  }
})

window.addEventListener('message', (event) => {
  if (event.data.type === 'EXTENSION_ME') {

    chrome.runtime.sendMessage({
      type: 'ME',
      payload: null
    }, (response) => {
      window.postMessage({
        type: 'EXTENSION_ME_RESPONSE',
        payload: response
      }, '*');
    });
  }
});

window.addEventListener('message', async (event) => {
  if (event.data.type === 'GET_TOKEN') {
    const getToken = async () => {
      const result = await chrome.storage.local.get(['token']);
      if (result) {
        return result.token;
      }
    };

    window.postMessage({
      type: 'GET_TOKEN_RESPONSE',
      payload: await getToken()
    }, '*')
  }
})

window.addEventListener('message', (event) => {
  if (event.data.type === 'EXTENSION_FETCH_IMAGE') {
    if (!event.data.payload.url) return;

    chrome.runtime.sendMessage({
      type: 'FETCH_IMAGE',
      payload: event.data.payload
    }, (response) => {
      if (response.success) {
        const img = document.querySelector('#' + event.data.payload.id);
        if (img) {
          console.log('carregou imagem')
          img.src = response.data;
        }
      }
    });
  }
});

window.addEventListener('message', (event) => {
  if (event.data.type === 'EXTENSION_QUOTE_CREATE') {
    if (!event.data.payload) return;

    chrome.runtime.sendMessage({
      type: 'QUOTE_CREATE',
      payload: event.data.payload
    }, (response) => {
      window.postMessage('EXTENSION_QUOTE_CREATE_RESPONSE')
    });
  }
});

setTimeout(injectReact, 3000);