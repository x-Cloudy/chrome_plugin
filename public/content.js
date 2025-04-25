const injectReact = async () => {

  const app = document.createElement('div');
  app.id = 'my-extension-root';
  document.body.appendChild(app);

  try {
    const manifest = await fetch(chrome.runtime.getURL('asset-manifest.json')).then(res => res.json());
    
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

setTimeout(injectReact, 3000);