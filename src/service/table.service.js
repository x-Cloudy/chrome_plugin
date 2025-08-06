import Fetch from "../modules/ChromeFetch";

class table_service extends Fetch {
  async getTableData() {
    return await this.errorHandler(
      async () => await this.get('GET_TABLE')
    );
  }

  async getDestityFilterData() {
    return await this.errorHandler(
      async () => await this.get('GET_TABLE_DESTINY_FILTER')
    );
  }

  async getShipFilterData() {
    return await this.errorHandler(
      async () => await this.get('GET_TABLE_SHIP_FILTER')
    );
  }

  async errorHandler(callback) {
    try {
      return await callback();
    } catch (error) {
      console.log('error', error)
    }
  }
}

const TableService = () => {
  const ctx = new table_service();
  if (!ctx) throw new Error('Erro ao inicializar a clase table service');
  return ctx;
}

export default TableService;