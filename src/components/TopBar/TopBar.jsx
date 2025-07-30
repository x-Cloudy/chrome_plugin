import { useEffect } from 'react';
import FiltersService from '../../service/filters.service';
import { usePages } from '../../context/pagesContext'
import DragDropBoard from '../../pages/Management/DragDropBoard';
import TablePage from '../../pages/Table/Table';
import './TopBar.css'

const TopBar = () => {
  const service = new FiltersService();
  
  const {
    filters,
    setFilters,
    currentFilter,
    setCurrentFilter,
    isAllPage,
    setIsAllPage,
    setCurrentPage,
    page } = usePages();

  const fetch_filters = async () => {
    const response = await service.getFilters();
    if (response.success) {
      setFilters(response.data);
    }
  }

  const handleClick = () => {
    if (isAllPage && page !== 'gerenciar') {
      setCurrentPage('gerenciar');
      return
    }

    setIsAllPage(!isAllPage);
    setCurrentPage('gerenciar')
  }

  const topPageSwitcher = () => {
    switch (page) {
      case 'gerenciar':
        return <DragDropBoard />;

      case 'table':
        return <TablePage />;

      default:
        return <></>;
    }
  }

  useEffect(() => {
    fetch_filters();
  }, [])

  return (
    <div className={isAllPage ? "topBar-container-active" : "topBar-container"}>
      {!isAllPage && <div className='topBar-menu'>
        {filters.map((item) => {
          return (
            <button
              id={item.id}
              className={`menu-item${currentFilter === item ? ' active' : ''}`}
              onClick={() => setCurrentFilter(item)}>
              {item.settings}
            </button>
          )
        })}
      </div>}

      {isAllPage &&
        <div className='topSideCurrentPage'>
          {topPageSwitcher()}
        </div>
      }

      <button
        onClick={() => handleClick()}
        className={`management-btn${isAllPage ? ' managment-active' : ''}`}>
        Gerenciar
      </button>
    </div>
  )
}

export default TopBar;