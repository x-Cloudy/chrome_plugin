import { useState } from "react";
import CloseBtn from "../Buttons/CloseBtn";
import './ReminderPage.css'
import bgChat from "../../assets/bgChat"

const menuOptions = ['Caixa de Entrada', 'Próximo Lembrete']

const ContactInfo = () => {
  const [selectedMenu, setSelectedMenu] = useState('Caixa de Entrada');

  const pageSwitcher = (menu) => {
    switch (menu) {
      case 'Caixa de Entrada':
        return ;

      case 'Próximo Lembrete':
        return ;

      default:
        return <></>
    }
  }

  return (
    <div className="container"
      style={{
        backgroundImage: `url(${bgChat})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}>
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', padding: '1rem', alignItems: 'start' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', width: '100%' }}>
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

      {pageSwitcher(selectedMenu)}
    </div>
    </div>
  )
}

export default ContactInfo;