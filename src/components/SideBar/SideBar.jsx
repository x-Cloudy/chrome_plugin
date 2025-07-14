import { CiLogin } from "react-icons/ci";
import { IoExitOutline } from "react-icons/io5";
import { FaCog } from "react-icons/fa";
import side_bar_menus from "../../config/menus";
import { usePages } from "../../context/pagesContext";
import { new_logo } from '../../assets/new_logo'
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import MenuButton from "../Buttons/MenuButtons";
import './sideBar.css'

const SideBar = () => {
  const { page, setCurrentPage, setIsAllPage } = usePages();
  const authStore = useContext(AuthContext);

  const resetPages = () => {
    setCurrentPage('');
    setIsAllPage(false);
  }

  return (
    <>
      {authStore.isLogged ? <div className="side-container" style={{ width: '55px' }}>
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          
          <img src={new_logo} alt="main logo" style={{ width: '45px', marginBottom: '2rem', cursor: 'pointer' }} onClick={() => resetPages()} />

          {side_bar_menus.map((item) => {
            return (
              <MenuButton options={item} />
            )
          })}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%' }}>
          <MenuButton options={{name: 'options', icon: <FaCog />, type: 'right'}} />

          <button
            style={{ background: 'transparent', color: 'white', marginLeft: '5px' }}
            className="menu-items"
            onClick={() => {
              authStore.logout();
              setCurrentPage('');
            }}>
            <IoExitOutline />
          </button>
        </div>
      </div> :
        // Menu deslogado
        <div className="side-container" style={{ width: '60px' }}>
          <div style={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <img src={new_logo} alt="main logo" style={{ width: '45px', marginBottom: '1.5rem' }} onClick={() => setCurrentPage('')} />

            <button
              style={page === 'login' ? { background: 'white', color: 'rgba(10, 8, 65, 1)' } : { background: 'transparent', color: 'white' }}
              className="menu-items"
              onClick={() => setCurrentPage('login')}>
              <CiLogin />
            </button>
          </div>
        </div>
      }
    </>
  )
}

export default SideBar; 