const injectReact = async () => {
  // Cria o container
  const app = document.createElement('div');
  app.id = 'my-extension-root';
  document.body.appendChild(app);

  try {
    // Carrega o asset-manifest
    const manifest = await fetch(chrome.runtime.getURL('asset-manifest.json')).then(res => res.json());
    
    // Remove o "./" dos caminhos e adapta para Chrome
    const cssPath = manifest.files["main.css"].replace('./', '');
    const jsPath = manifest.files["main.js"].replace('./', '');

    // Injeta CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = chrome.runtime.getURL(cssPath);
    document.head.appendChild(link);

    // Injeta JS
    const script = document.createElement('script');
    script.src = chrome.runtime.getURL(jsPath);
    document.head.appendChild(script);

  } catch (error) {
    console.error('Erro ao carregar extensão:', error);
  }
};

// Aguarda 3 segundos para o WhatsApp Web carregar
setTimeout(injectReact, 3000);