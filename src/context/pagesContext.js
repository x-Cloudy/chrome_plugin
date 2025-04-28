import { createContext, useState } from "react";

export const PagesContext = createContext(null);

export const PagesProvider = ({ children }) => {
  const [page, setPage] = useState('home');

  const setCurrentPage = (page) => {
    setPage(page)
  }

  return (
    <PagesContext.Provider value={{ page, setCurrentPage }}>
      {children}
    </PagesContext.Provider>
  )
}
