import { FaUser } from "react-icons/fa";
import { PiGaugeBold } from "react-icons/pi";
import { PagesContext } from "../../context/pagesContext";

import './menu.css'
import { useContext } from "react";

const Menu = () => {
  const pageStore = useContext(PagesContext);

  const menus = [
    {
      title: 'Reservas',
      icon: PiGaugeBold
    },
    {
      title: 'Dados do cliente',
      icon: FaUser
    },
    {
      title: 'Dados do cliente',
      icon: FaUser
    },
    {
      title: 'Dados do cliente',
      icon: FaUser
    },
  ]
  
  return (
    <ul className="menu">
      {
        menus.map((item, index) => {
          return (
            <li onClick={() => pageStore.setCurrentPage(item.title)} className="menu-item" key={index}>
              <item.icon style={{marginRight: '0.5rem'}}/>
              <p>{item.title}</p>
            </li>
          )
        })
      }
    </ul>
  )
}

export default Menu;