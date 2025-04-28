import './popup.css'
import logo from '../../assets/mainLogo.jpg'
import Main from '../../pages/Main/Main';
import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../context/authContext';
import { PagesContext } from '../../context/pagesContext';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const authStore = useContext(AuthContext);
  const pageStore = useContext(PagesContext);

  useEffect(() => {
    authStore.loadAuth();
  }, [authStore.isLogged])

  return (
    <div
      className='main-pop'
      style={isOpen ?
        { width: '300px', height: '500px', padding: '1rem', borderRadius: '6px' } :
        { width: '80px', height: '30px', borderRadius: '5px' }}>
      {!isOpen &&
        <div style={{ height: '30px', width: '100%', display: 'flex', justifyContent: 'end' }}>
          <button className='open-btn' onClick={() => setIsOpen(true)}>ABRIR</button>
        </div>
      }

      {isOpen &&
        <div style={{ height: '100%', width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center', marginBottom: '2rem' }}>
            {isOpen && authStore.isLogged && <button className='home-btn' onClick={() => pageStore.setCurrentPage('home')}>
              <img src={logo} alt="logo" style={{width: '50px'}} />
            </button>}

            {isOpen && <button className='close-btn' onClick={() => setIsOpen(false)}>X</button>}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
            <Main />
            <div style={{ height: '40px', width: '100%', backgroundColor: 'blue' }}>x</div>
          </div>
        </div>
      }
    </div>
  );
};

export default Popup;