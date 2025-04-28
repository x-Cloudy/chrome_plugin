import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState('');
  const [isLogged, setIsLogged] = useState(false);

  const handleSetUser = (userPayload) => {
    setUser(userPayload)
  }

  const handleSetToken = (token) => {
    setToken(token)
  }

  useEffect(() => {
    setIsLogged((!!user.id && !!token))
  }, [user, token])

  return (
    <AuthContext.Provider value={{user, handleSetUser, handleSetToken, isLogged}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;