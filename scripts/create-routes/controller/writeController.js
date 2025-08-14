const ArgsHandler = require('../modules/ArgsHandler.js')
const CodeWriter = require('../modules/codeWriter.js')

class WriteController {
  constructor() {
    this.argsHandler = null;
    this.codeWriter = null;
  }

  async exec() {
    this.argsHandler = new ArgsHandler();
    this.codeWriter = new CodeWriter()
    this.methodHandler(this.argsHandler.flags);
  }

  async methodHandler(args) {
    if (!('method' in args)) throw new Error('A rota precisa ter um método');
    if (typeof args.method === 'boolean') throw new Error('O metodo precisa de um valor válido');

    if (!('name' in args)) throw new Error('A rota precisa ter um nome');
    if (typeof args.name === 'boolean') throw new Error('O nome precisa de um valor válido');

    if (!('url' in args)) throw new Error('A rota precisa ter uma url');
    if (typeof args.url === 'boolean') throw new Error('A url precisa de um valor válido');

    switch (args.method) {
      case "get":
        this.get(args);
        break;
      case "post":
        this.post(args);
        break;
      case "put":
        this.put(args);
        break;
      case "delete":
        this.delete(args);
        break;

      default:
        throw new Error('Método inválido');
    }
  }

  async get(args) {
    await this.codeWriter.setPayload(args);
    await this.codeWriter.writeListener();
  }

  async post() {

  }

  async put() {

  }

  async delete() {

  }
}

module.exports = WriteController;