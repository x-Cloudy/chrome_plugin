const FileParser = require('./fileParser');

class DataStorage extends FileParser {
  constructor() {
    super();
    this.data_location = 'scripts/create-routes/data/current_data.json';
  }

  async storage_listener(listener) {
    if (!listener) throw new Error('Um listener precisa ser fornecido');

    const file_string = await this.readFiles(this.data_location);
    const file = await JSON.parse(file_string);

    file.listeners.unshift(listener);

    await this.writeFiles(this.data_location, JSON.stringify(file));

    return file.listeners;
  }

  async storage_route(route) {
    if (!route) throw new Error('Um method precisa ser fornecido');

    const file_string = await this.readFiles(this.data_location);
    const file = await JSON.parse(file_string);

    file.routes.unshift(route);

    await this.writeFiles(this.data_location, JSON.stringify(file));

    return file.routes;
  }
};


module.exports = DataStorage;