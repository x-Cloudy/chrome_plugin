import { api } from "../boot/axios"

export class LoginService {
  async login({ formData }) {
    const response = await api.post(formData);
    console.log(response)
    return response.data
  }
}