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

  getCaseTemplate() {
    if (!this.func_name && !this.route_name) throw new Error('Erro ao montar template: func_name ou route_name inválidos');

    const cases = `
      case "${this.route_name}":
        this.${this.func_name}(request, sendResponse);
        break;
    `
    return cases
  }

  getMethodTemplate() {
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
            }
            ${this.method !== 'get' && 'body: JSON.stringify({ settings: request.payload })'}  
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

