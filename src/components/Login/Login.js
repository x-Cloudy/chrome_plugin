import { useState } from "react";
import { LoginService } from "../../service/login.service";

const Login = () => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const service = new LoginService()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const response = await service.login({ email, password });
    console.log(response)
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="text" placeholder="Email" />
      <input name="password" type="password" placeholder="Senha" />
      <button type="submit">Login</button>
      {isLoading ? "Carregando..." : message}
    </form>
  );
};

export default Login;