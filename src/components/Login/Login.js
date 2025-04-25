import { useState, useContext } from "react";
import { LoginService } from "../../service/login.service";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const authStore = useContext(AuthContext);

  const service = new LoginService()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await service.login({ email, password });
      authStore.handleSetUser(response.user)
      authStore.handleSetToken(response.access_token)
    } catch (error) {
      if (error.data.message) {
        setMessage(error.data.message)
      }
    } finally {
      setIsLoading(false);
    }
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