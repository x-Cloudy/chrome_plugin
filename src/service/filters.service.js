import Fetch from "../modules/ChromeFetch"

export default class FiltersService extends Fetch {
  async getFilters() {
    return await this.get('GET_FILTERS');
  }

  async postFilters() {
    return await this.post('POST_FILTERS');
  }
}