import './popup.css'
import Login from '../Login/Login';
import React from 'react';
import { LoginService } from '../../service/login.service';
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../context/authContext';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const authStore = useContext(AuthContext);

  useEffect(() => {
    const service = new LoginService()
    const fetch = async () => {
      try {
        const user = await service.me();
        const token = await service.getToken();
        authStore.handleSetUser(user)
        authStore.handleSetToken(token)
      } catch (error) {
       console.log('me error:', error) 
      }
    }

    fetch();

    console.log('isAuth', authStore.isLogged)
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
        <div style={{ display: 'flex', justifyContent: 'end', alignContent: 'center' }}>
          {isOpen && <button className='close-btn' onClick={() => setIsOpen(false)}>X</button>}
        </div>
        {!authStore.isLogged && <Login />}
      </div>
      }
    </div>
  );
};

export default Popup;