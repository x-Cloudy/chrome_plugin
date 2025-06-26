import { RiMenuSearchLine } from "react-icons/ri";
import { FaRegAddressCard, FaCog  } from "react-icons/fa";
import { LuNotebookPen } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import { useContext } from "react";
import { PagesContext } from "../../context/pagesContext";
import { new_logo } from '../../assets/new_logo'
import './sideBar.css'

const SideBar = () => {
  const pageStore = useContext(PagesContext);

  return (
    <div className="side-container" style={{ width: '60px' }}>
      <div style={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <img src={new_logo} alt="main logo" style={{ width: '45px', marginBottom: '2rem' }} />

        <button
          style={pageStore.page === 'chat' ? { background: 'white', color: 'rgba(10, 8, 65, 1)' } : { background: 'transparent', color: 'white' }}
          className="menu-items"
          onClick={() => pageStore.setCurrentPage('chat')}>
          <RiMenuSearchLine />
        </button>

        <button
          style={pageStore.page === 'infos' ? { background: 'white', color: 'rgba(10, 8, 65, 1)' } : { background: 'transparent', color: 'white' }}
          className="menu-items"
          onClick={() => pageStore.setCurrentPage('infos')}>
          <FaRegAddressCard />
        </button>

        <button
          style={pageStore.page === 'notes' ? { background: 'white', color: 'rgba(10, 8, 65, 1)' } : { background: 'transparent', color: 'white' }}
          className="menu-items"
          onClick={() => pageStore.setCurrentPage('notes')}>
          <LuNotebookPen />
        </button>

        <button
          style={pageStore.page === 'plus' ? { background: 'white', color: 'rgba(10, 8, 65, 1)' } : { background: 'transparent', color: 'white' }}
          className="menu-items"
          onClick={() => pageStore.setCurrentPage('plus')}>
          <FaPlus />
        </button>
      </div>

      <button
        style={pageStore.page === 'options' ? { background: 'white', color: 'rgba(10, 8, 65, 1)' } : { background: 'transparent', color: 'white' }}
        className="menu-items"
        onClick={() => pageStore.setCurrentPage('options')}>
        <FaCog />
      </button>
    </div>
  )
}

export default SideBar; 