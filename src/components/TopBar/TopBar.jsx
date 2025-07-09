import { useState } from 'react';
import { usePages } from '../../context/pagesContext'
import DragDropBoard from '../../pages/Management/DragDropBoard';
import './TopBar.css'

const TopBar = () => {
  const menuOption = ['Todas', 'Não Lidas', 'Respondeu', 'Não Respondeu', 'Concluídos']
  const { filter, setCurrentFilter } = usePages();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={isOpen ? "topBar-container-active" : "topBar-container"}>
      {!isOpen && <div className='topBar-menu'>
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

      {isOpen &&
        <div className='dragAndDropPage'>
          <DragDropBoard />
        </div>
      }

      <button onClick={() => setIsOpen(!isOpen)} className={`management-btn${isOpen ? ' managment-active' : ''}`}>Gerenciar</button>
    </div>
  )
}

export default TopBar;