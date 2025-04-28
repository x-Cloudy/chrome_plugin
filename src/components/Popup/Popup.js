import './popup.css'
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
        { width: '300px', height: '500px', padding: '1rem' } :
        { width: '80px', height: '30px', borderRadius: '5px' }}>
      {!isOpen &&
        <div style={{ height: '30px', width: '100%', display: 'flex', justifyContent: 'end' }}>
          <button className='open-btn' onClick={() => setIsOpen(true)}>ABRIR</button>
        </div>
      }

      {isOpen && <div style={{ height: '100%', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'justify-spacebetween', alignContent: 'center' }}>
          {isOpen && <button className='close-btn' onClick={() => setIsOpen(false)}>X</button>}
          {isOpen && <button className='close-btn' onClick={() => pageStore('home')}>
            Home
          </button>}
        </div>
        <Main />
      </div>
      }
    </div>
  );
};

export default Popup;