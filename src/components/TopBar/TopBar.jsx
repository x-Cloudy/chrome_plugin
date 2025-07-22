import { usePages } from '../../context/pagesContext'
import DragDropBoard from '../../pages/Management/DragDropBoard';
import TablePage from '../../pages/Table/Table';
import './TopBar.css'

const TopBar = () => {
  const menuOption = ['Todas', 'Não Lidas', 'Respondeu', 'Não Respondeu', 'Concluídos']
  const {
    filters,
    currentFilter,
    setCurrentFilter,
    isAllPage,
    setIsAllPage,
    setCurrentPage,
    page } = usePages();

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

  return (
    <div className={isAllPage ? "topBar-container-active" : "topBar-container"}>
      {!isAllPage && <div className='topBar-menu'>
        {menuOption.map((item) => {
          return (
            <button
              className={`menu-item${currentFilter === item ? ' active' : ''}`}
              onClick={() => setCurrentFilter(item)}>
              {item}
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