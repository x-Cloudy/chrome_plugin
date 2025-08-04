import Fetch from "../modules/ChromeFetch";

class Recontact extends Fetch {
  async getContact() {
    const response = await this.get("GET_RECONTACT");
    console.log('res', response)
  }
}

const useRecontact = () => {
  return new Recontact();
};

export default useRecontact;