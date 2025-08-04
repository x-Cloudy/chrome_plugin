import Fetch from "../modules/ChromeFetch";

class Recontact extends Fetch {
  async getContact() {
   const response = await this.get("GET_RECONTACT");
   return response;
  }
}

const useRecontact = () => {
  const ctx = new Recontact();
  if (!ctx) throw new Error('Erro na instancia do Recontact');
  return ctx;
};

export default useRecontact;