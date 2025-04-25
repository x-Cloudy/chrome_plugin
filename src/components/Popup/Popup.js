import './popup.css'
import Login from '../Login/Login';
import React from 'react';
import { useState, useContext } from 'react';
import { AuthContext } from '../../context/authContext';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const authStore = useContext(AuthContext);

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
        <div style={{ display: 'flex', justifyContent: 'end', alignContent: 'center' }}>
          {isOpen && <button className='close-btn' onClick={() => setIsOpen(false)}>X</button>}
        </div>
        {!authStore.getter.isLogged() && <Login />}
      </div>
      }
    </div>
  );
};

export default Popup;