import Fetch from "../modules/ChromeFetch";

class Recontact extends Fetch {
  async getContact(filters) {
    console.log('entrou no recontan', filters)
   const response = await this.post("GET_RECONTACT", filters);
   return response;
  }
}

const useRecontact = () => {
  const ctx = new Recontact();
  if (!ctx) throw new Error('Erro na instancia do Recontact');
  return ctx;
};

export default useRecontact;