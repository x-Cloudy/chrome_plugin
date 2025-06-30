import { createContext, useEffect, useState } from "react";
import { LoginService } from "../service/login.service";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const service = new LoginService()

  const handleSetUser = (userPayload) => {
    setUser(userPayload)
  }

  const handleSetToken = (token) => {
    setToken(token)
  }

  const loadAuth = async () => {
    try {
      const user = await service.me();
      const token = await service.getToken();
      setUser(user)
      setToken(token)
    } catch (error) {
     console.log('loadAuth error:', error) 
    }
  }

  const logout = async () => {
    await service.logout();
    setUser(null);
    setToken('')
  }

  useEffect(() => {
    setIsLogged(!!user && !!user.id && !!token)
  }, [user, token])

  return (
    <AuthContext.Provider value={{
      user,
      handleSetUser,
      handleSetToken,
      isLogged,
      loadAuth,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;