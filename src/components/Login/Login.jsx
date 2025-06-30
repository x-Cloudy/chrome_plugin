import { useState, useContext } from "react";
import { LoginService } from "../../service/login.service";
import { AuthContext } from "../../context/authContext";
import { usePages } from "../../context/pagesContext";
import "./Login.css"

const Login = () => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const authStore = useContext(AuthContext);
  const pageStore = usePages()

  const service = new LoginService()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await service.login({ email, password });
      authStore.handleSetUser(response.user);
      authStore.handleSetToken(response.access_token);
      pageStore.setCurrentPage('');
    } catch (error) {
      if (error.data.message) {
        setMessage(error.data.message)
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '1rem 0', padding: '0 1rem', position: 'relative', zIndex: 1 }}>

      <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1 }}>
        <label className="label-custom-login" htmlFor="email">Email</label>
        <input className="input-custom-login" id="email" name="email" type="text" placeholder="Email" style={{ zIndex: 1, pointerEvents: 'auto' }} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1 }}>
        <label className="label-custom-login" htmlFor="password">Password</label>
        <input className="input-custom-login" id="password" name="password" type="password" placeholder="Senha" style={{ zIndex: 1, pointerEvents: 'auto' }} />
      </div>

      <button className="login-btn" type="submit">Login</button>
      {isLoading ? "Carregando..." : message}
    </form>
  );
};

export default Login;