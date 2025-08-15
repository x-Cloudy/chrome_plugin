class TemplateMaker {
  constructor() {
    this.method = null;
    this.name = null;
    this.url = null;
    this.func_name = null;
    this.route_name = null;
  }

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  setTemplatesAttr(template) {
    const { method, name, url } = template;

    this.method = method;
    this.name = name;
    this.url = url;

    this.route_name = `${method.toUpperCase()}_${name.toUpperCase()}`;
    this.func_name = `handle${this.capitalize(name)}${this.capitalize(method)}`;
  }

  async getCaseTemplate(routes) {
    let all_cases = routes.reduce((acc, cur) => {
      acc += `
      case "${cur.type}":
        this.${cur.handler}(request, sendResponse);
        break;
      `
      return acc;
    }, '')

    all_cases += `
      default:
        break;
      `

    const case_template = `
      chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        switch (request.type) {
          ${all_cases}
        }
        return true;
      });
    `;

    return case_template;
  }

  async getMethodTemplate() {
    if (!this.func_name && !this.method && !this.url) {
      throw new Error('Erro ao montar template: func_name, method ou url inválidos')
    };

    const method_template = `
      ${this.func_name}(request, sendResponse) {
        this.getToken().then((token) => {
          fetch("https://api.bpcruzeiros.com/admin/${this.url}", {
            method: "${this.method.toUpperCase()}",
            headers: {
              "Content-Type": "application/json",
              "Authorization": \`Bearer \${token}\`
            },
            ${this.method !== 'get' ? 'body: JSON.stringify(request.payload)' : ''}  
          })
            .then(res => res.json())
            .then((data) => {
              sendResponse({ success: true, data });
            })
            .catch(err => sendResponse({ success: false, error: err }));
        }).catch(err => sendResponse({ success: false, error: err }));
      }
    `;
    return method_template;
  }
}


module.exports = TemplateMaker;

