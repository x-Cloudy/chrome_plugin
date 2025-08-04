import Fetch from "../modules/ChromeFetch";

class Recontact extends Fetch {
  async getContact() {
    const response = await this.get("GET_RECONTACT");
    console.log('res', response)
  }
}

const useRecontact = () => {
  const ctx = new Recontact();
  return ctx;
}

export default useRecontact;