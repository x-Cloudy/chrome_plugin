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