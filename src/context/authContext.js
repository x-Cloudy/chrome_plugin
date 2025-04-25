import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState('');

  const handleSetUser = (userPayload) => {
    setUser(userPayload)
  }

  const handleSetToken = (token) => {
    setToken(token)
  }

  const getter = {
    isLogged: () => user.id && token,
  }

  return (
    <AuthContext.Provider value={{user, getter, handleSetUser, handleSetToken}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;