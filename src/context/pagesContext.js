import { createContext, useState, useContext } from "react";

const PagesContext = createContext(null);

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

export function usePages() {
  const ctx = useContext(PagesContext)
  if (!ctx) throw new Error('usePages must be used within a PagesProvider')
  return ctx
}
