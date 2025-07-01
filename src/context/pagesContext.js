import { createContext, useState, useContext } from "react";

const PagesContext = createContext(null);

export const PagesProvider = ({ children }) => {
  const [page, setPage] = useState('');
  const [filter, setFilter] = useState('Todas');

  const setCurrentPage = (page) => {
    setPage(page);
  };

  const setCurrentFilter = (filter) => {
    setFilter(filter);
  };

  return (
    <PagesContext.Provider value={{ page, filter, setCurrentPage, setCurrentFilter }}>
      {children}
    </PagesContext.Provider>
  )
}

export function usePages() {
  const ctx = useContext(PagesContext)
  if (!ctx) throw new Error('usePages must be used within a PagesProvider')
  return ctx
}
