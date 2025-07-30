import Fetch from "../modules/ChromeFetch"

export default class FiltersService extends Fetch {
  async getFilters() {
    return await this.get('GET_FILTERS');
  }

  async postFilters(new_filter) {
    return await this.post('POST_FILTERS', new_filter);
  }

  async deleteFilters(id) {
    return await this.delete('DELETE_FILTERS', id);
  }

  async putFilters(payload) {
    return await this.put('PUT_FILTERS', payload);
  }
}