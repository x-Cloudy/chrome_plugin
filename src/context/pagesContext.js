import { createContext, useState, useContext, useEffect } from "react";

const PagesContext = createContext(null);

export const PagesProvider = ({ children }) => {
  const [page, setPage] = useState('');
  const [filters, setFilter] = useState([])
  const [currentFilter, setCurrentFilters] = useState('');
  const [isAllPage, setAllPage] = useState(false);

  const setIsAllPage = (value) => {
    setAllPage(value)
  }

  const setCurrentPage = (page) => {
    console.log('page', page)
    setPage(page);
  };

  const setCurrentFilter = (filter) => {
    setCurrentFilters(filter);
  };

  const setFilters = (filters) => {
    setFilter(prev => [...prev, ...filters]);
  }

  const clearFilters = () => {
    setFilter(prev => prev = [])
  }

  useEffect(() => {
    console.log('effect filter', filters)
  }, [filters])

  return (
    <PagesContext.Provider value={{
      page,
      filters,
      setFilters,
      currentFilter,
      setCurrentPage,
      setCurrentFilter,
      setIsAllPage,
      clearFilters,
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
