import './popup.css'
import Main from '../../pages/Main/Main';
import React from 'react';
import FetchImage from '../../service/loadImage.service';
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../context/authContext';
import { PagesContext } from '../../context/pagesContext';
import mainLogo from '../../assets/main_logo'

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const authStore = useContext(AuthContext);
  const pageStore = useContext(PagesContext);
  const fetch_image = new FetchImage();

  useEffect(() => {
    authStore.loadAuth();
  }, [authStore.isLogged])

  useEffect(() => {
    if (authStore.user.avatar_url !== '') {
      fetch_image.loadImage({
        url: authStore.user.avatar_url,
        id: 'user_avatar'
      })
    }
  }, [authStore.user])

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
              <img src={mainLogo} alt="logo" style={{ width: '80px', marginLeft: '1rem' }} />
            </button>}

            {isOpen && <button className='close-btn' onClick={() => setIsOpen(false)}>X</button>}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
            <Main />
            {authStore.isLogged && <div style={{ height: '50px', width: '100%', display: 'flex' }}>
              <img src='' id='user_avatar' alt="foto de usuario" style={{ width: '50px', borderRadius: '50%', aspectRatio: 4 / 4, marginRight: '1rem' }} />
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center'}}>
                <p style={{ textTransform: 'capitalize' }}>
                  {`${authStore.user.name.toLowerCase()} ${authStore.user.last_name.toLowerCase()}`}
                </p>
                <p style={{color: 'grey'}}>{authStore.user.roles[0]}</p>
              </div>
            </div>}
          </div>
        </div>
      }
    </div>
  );
};

export default Popup;