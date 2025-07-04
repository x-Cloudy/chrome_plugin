import { useState } from "react";
import CloseBtn from "../Buttons/CloseBtn";
import './ContactInfo.css'

const menuOptions = ['Perfil', 'Anotaçãoes', 'Informações básicas']

const ContactInfo = () => {
  const [selectedMenu, setSelectedMenu] = useState('Perfil')

  return (
    <div style={{display: 'flex', flexDirection: 'column', width: '100%', height: '100%', padding: '1rem', alignItems: 'start'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', width: '100%'}}>
        <div>
          {menuOptions.map((item) => {
            return (
              <button onClick={() => setSelectedMenu(item)} 
              className={`menu-items-contact${selectedMenu === item ? ' active-contact' : ''}`}>
                {item}
              </button>
            )
          })}
        </div>
        <CloseBtn />
      </div>
    </div>
  )
}

export default ContactInfo;