import { createContext, useContext, useState } from "react";
import useRecontact from "../service/recontact.service";

const RecontactContext = createContext(null);

export const RecontactProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const recontact = useRecontact();

  const handleFetchData = async () => {
    const { data, success } = await recontact.getContact();
    if (success) {
      setData(data.data)
    }
  }

  return (
    <RecontactContext.Provider value={{ handleFetchData, data }}>
      {children}
    </RecontactContext.Provider>
  );
}

export const useRecontactContext = () => {
  const ctx = useContext(RecontactContext);
  if (!ctx) throw new Error('Erro ao contextualizar o recontact');
  return ctx
}
