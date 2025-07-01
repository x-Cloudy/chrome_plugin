import { usePages } from '../../context/pagesContext'
import './topBar.css'

const TopBar = () => {
  const menuOption = ['Todas', 'Não Lidas', 'Respondeu', 'Não Respondeu', 'Concluídos']
  const { filter, setCurrentFilter } = usePages();

  return (
    <div className="topBar-container">
      <div className='topBar-menu'>
        {menuOption.map((item) => {
          return (
            <button
              className={`menu-item${filter === item ? ' active' : ''}`}
              onClick={() => setCurrentFilter(item)}>
              {item}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default TopBar;