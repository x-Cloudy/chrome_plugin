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

    this.case_template = '';
    this.method_template = '';
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
      function_name: this.background_path,
      new_code: new_code
    });

    console.log(output)
  }

  async setPayload(args) {
    this.payload_listener.type = `${args.method.toUpperCase()}_${args.name.toUpperCase()}`;
    this.payload_listener.usePayload = args.payload ?? false;
    this.new_listener = await this.storageWriter.storage_listener(this.payload_listener);
    
    this.templateMaker.setTemplatesAttr(args);
    this.case_template = this.templateMaker.getCaseTemplate();
    this.method_template = this.templateMaker.getMethodTemplate();

    console.log(this.case_template)
    console.log(this.method_template)
  }
}

module.exports = CodeWriter;