import { createContext, useState } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState('');

  const handleUser = (userPayload) => {
    setUser(userPayload)
  }

  return (
    <AuthContext.Provider value={{user, handleUser}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;