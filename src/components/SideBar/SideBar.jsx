import { RiMenuSearchLine } from "react-icons/ri";
import { FaRegAddressCard, FaCog  } from "react-icons/fa";
import { LuNotebookPen } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import { usePages } from "../../context/pagesContext";


import { new_logo } from '../../assets/new_logo'
import './sideBar.css'

const SideBar = () => {
  const { page, setCurrentPage } = usePages()

  return (

    <div className="side-container" style={{ width: '60px' }}>
      <div style={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <img src={new_logo} alt="main logo" style={{ width: '45px', marginBottom: '2rem' }} />

        <button
          style={page === 'chat' ? { background: 'white', color: 'rgba(10, 8, 65, 1)' } : { background: 'transparent', color: 'white' }}
          className="menu-items"
          onClick={() => setCurrentPage('chat')}>
          <RiMenuSearchLine />
        </button>

        <button
          style={page === 'infos' ? { background: 'white', color: 'rgba(10, 8, 65, 1)' } : { background: 'transparent', color: 'white' }}
          className="menu-items"
          onClick={() => setCurrentPage('infos')}>
          <FaRegAddressCard />
        </button>

        <button
          style={page === 'notes' ? { background: 'white', color: 'rgba(10, 8, 65, 1)' } : { background: 'transparent', color: 'white' }}
          className="menu-items"
          onClick={() => setCurrentPage('notes')}>
          <LuNotebookPen />
        </button>

        <button
          style={page === 'plus' ? { background: 'white', color: 'rgba(10, 8, 65, 1)' } : { background: 'transparent', color: 'white' }}
          className="menu-items"
          onClick={() => setCurrentPage('plus')}>
          <FaPlus />
        </button>
      </div>

      <button
        style={page === 'options' ? { background: 'white', color: 'rgba(10, 8, 65, 1)' } : { background: 'transparent', color: 'white' }}
        className="menu-items"
        onClick={() => setCurrentPage('options')}>
        <FaCog />
      </button>
    </div>
  )
}

export default SideBar; 