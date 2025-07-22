export default class ChromeMessageHandler {
  constructor() {
    this.initListeners();
  }

  initListeners() {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      switch (request.type) {
        case "QUOTE_CREATE":
          this.handleQuoteCreate(request, sendResponse);
          break;
        case "LOGIN":
          this.handleLogin(request, sendResponse);
          break;
        case "ME":
          this.handleMe(sendResponse);
          break;
        case "FETCH_IMAGE":
          this.handleFetchImage(request, sendResponse);
          break;

        default:
          break;
      }
      return true;
    });
  }

  async getToken() {
    const result = await chrome.storage.local.get(['token']);
    return result.token;
  }

  handleQuoteCreate(request, sendResponse) {
    this.getToken().then((token) => {
      fetch("https://api.bpcruzeiros.com/admin/quotes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(request.payload.form)
      })
        .then(res => res.json())
        .then((data) => {
          console.log('fetch response', data);
          sendResponse({ success: true, data });
        })
        .catch(err => sendResponse({ success: false, error: err }));
    }).catch(err => sendResponse({ success: false, error: err }));
  }

  handleLogin(request, sendResponse) {
    fetch("https://api.bpcruzeiros.com/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request.payload)
    })
      .then(res => res.json())
      .then((data) => {
        if (data.access_token) {
          chrome.storage.local.set({ token: data.access_token });
          chrome.storage.local.set({ user: data.user });
          sendResponse({ success: true, data });
        } else {
          sendResponse({ success: false, data });
        }
      })
      .catch(err => sendResponse({ success: false, error: err }));
  }

  handleMe(sendResponse) {
    this.getToken().then((token) => {
      fetch("https://api.bpcruzeiros.com/api/auth/me", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: null
      })
        .then(res => res.json())
        .then((data) => {
          chrome.storage.local.set({ user: data.user });
          sendResponse({ success: true, data });
        })
        .catch(err => sendResponse({ success: false, error: err }));
    }).catch(err => sendResponse({ success: false, error: err }));
  }

  handleFetchImage(request, sendResponse) {
    fetch(request.payload.url)
      .then(res => res.blob())
      .then((blob) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          sendResponse({ success: true, data: reader.result });
        };
        reader.readAsDataURL(blob);
      })
      .catch(err => sendResponse({ success: false, error: err }));
  }
}

