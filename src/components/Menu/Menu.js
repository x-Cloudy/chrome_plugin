import { FaUser } from "react-icons/fa";
import './menu.css'

const Menu = () => {
  const menus = [
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
            <li className="menu-item" key={index}>
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