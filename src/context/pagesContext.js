import { createContext, useState, useContext } from "react";

const PagesContext = createContext(null);

export const PagesProvider = ({ children }) => {
  const [page, setPage] = useState('');
  const [currentFilter, setCurrentFilters] = useState('Todas');
  const [filters, setFilter] = useState([])
  const [isAllPage, setAllPage] = useState(false);

  const setIsAllPage = (value) => {
    setAllPage(value)
  }

  const setCurrentPage = (page) => {
    setPage(page);
  };

  const setCurrentFilter = (filter) => {
    setCurrentFilters(filter);
  };

  const setFilters = (filters) => {
    setFilter(prev => [...prev, filters]);
  }

  return (
    <PagesContext.Provider value={{
      page,
      filters,
      setFilters,
      currentFilter,
      setCurrentPage,
      setCurrentFilter,
      setIsAllPage,
      isAllPage
    }}>
      {children}
    </PagesContext.Provider>
  )
}

export function usePages() {
  const ctx = useContext(PagesContext)
  if (!ctx) throw new Error('usePages must be used within a PagesProvider')
  return ctx
}
