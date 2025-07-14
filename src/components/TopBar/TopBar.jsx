import { usePages } from '../../context/pagesContext'
import DragDropBoard from '../../pages/Management/DragDropBoard';
import './TopBar.css'

const TopBar = () => {
  const menuOption = ['Todas', 'Não Lidas', 'Respondeu', 'Não Respondeu', 'Concluídos']
  const { filter, setCurrentFilter, isAllPage, setIsAllPage, setCurrentPage, page } = usePages();

  const handleClick = () => {
    setIsAllPage(!isAllPage);
    setCurrentPage('gerenciar')
  }

  return (
    <div className={isAllPage ? "topBar-container-active" : "topBar-container"}>
      {!isAllPage && <div className='topBar-menu'>
        {menuOption.map((item) => {
          return (
            <button
              className={`menu-item${filter === item ? ' active' : ''}`}
              onClick={() => setCurrentFilter(item)}>
              {item}
            </button>
          )
        })}
      </div>}

      {isAllPage &&
        <div className='topSideCurrentPage'>
          <DragDropBoard />
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