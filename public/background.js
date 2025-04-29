chrome.runtime.onInstalled.addListener(() => {
  // chrome.action.disable();

  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    const rule = {
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {
            hostSuffix: "web.whatsapp.com",
            schemes: ["https"]
          },
        }),
      ],
      actions: [new chrome.declarativeContent.ShowAction()],
    };

    chrome.declarativeContent.onPageChanged.addRules([rule]);
  });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "LOGIN") {
    fetch("https://api.bpcruzeiros.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(request.payload)
    })
      .then(res => res.json())
      .then((data) => {
        if (typeof data.access_token !== 'undefined') {
          sendResponse({ success: true, data })
          chrome.storage.local.set({ token: data.access_token })
          chrome.storage.local.set({ user: data.user })
        } else {
          sendResponse({ success: false, data })
        }
      })
      .catch(err => sendResponse({ success: false, error: err }));
    return true;
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const getToken = async () => {
    const result = await chrome.storage.local.get(['token']);
    return result.token;
  };

  if (request.type === "ME") {
    getToken().then((token) => {
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
          sendResponse({ success: true, data })
          chrome.storage.local.set({ user: data.user })
        })
        .catch(err => sendResponse({ success: false, error: err }));
    }).catch(err => sendResponse({ success: false, error: err }));
  }
  return true;
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "FETCH_IMAGE") {
    fetch(request.payload.url)
      .then(res => res.blob())
      .then((blob) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          sendResponse({ success: true, data: reader.result })
        };
        reader.readAsDataURL(blob);
      })
      .catch(err => sendResponse({ success: false, error: err }));
    return true;
  }
});