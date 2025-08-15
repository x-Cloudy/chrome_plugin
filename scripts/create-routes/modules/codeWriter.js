const FileParser = require('./fileParser');
const StorageWriter = require('./dataStorage');
const TemplateMaker = require('../templates/caseTemplate')

class CodeWriter {
  constructor() {
    this.fileParser = new FileParser();
    this.storageWriter = new StorageWriter();
    this.templateMaker = new TemplateMaker();

    this.content_func_name = 'setupListeners';
    this.content_path = 'public/app/content.js';

    this.background_path = 'public/app/modules/ChromeMessageHandler.js';
    this.background_func_name = 'initListeners';

    this.payload_listener = {};
    this.new_listener = {};

    this.payload_route = {};
    this.new_routes = {};

    this.case_template = '';
    this.method_template = '';
  }

  async setPayload(args) {
    this.payload_listener.type = `${args.method.toUpperCase()}_${args.name.toUpperCase()}`;
    this.payload_listener.usePayload = args.payload ?? false;
    this.new_listener = await this.storageWriter.storage_listener(this.payload_listener);

    this.templateMaker.setTemplatesAttr(args);
    this.payload_route.type = this.payload_listener.type;
    this.payload_route.handler = this.templateMaker.func_name;
    this.new_routes = await this.storageWriter.storage_route(this.payload_route);

    this.case_template = await this.templateMaker.getCaseTemplate(this.new_routes);
    this.method_template = await this.templateMaker.getMethodTemplate();
  }

  mountListener(new_listener) {
    let listener_fomatted = ``;
    new_listener.map((item) => {
      return listener_fomatted += `this.registerMessage({ type: '${item.type}', usePayload: ${item.usePayload ?? false} }); `
    });
    return listener_fomatted;
  }

  async writeListener() {
    const new_listener_formatted = this.mountListener(this.new_listener);

    const output = await this.fileParser.replaceCode({
      path: this.content_path,
      function_name: this.content_func_name,
      new_code: new_listener_formatted
    });

    await this.fileParser.writeFiles(this.content_path, output);
  }

  async writeRoteCase() {
    const output = await this.fileParser.replaceCode({
      path: this.background_path,
      function_name: this.background_func_name,
      new_code: this.case_template
    });

    await this.fileParser.writeFiles(this.background_path, output);
  }

  async writeMethod() {
    const output = await this.fileParser.addMethod({
      path: this.background_path,
      method_template: this.method_template
    });

    await this.fileParser.writeFiles(this.background_path, output);
  }
}

module.exports = CodeWriter;