import { LoginPage } from "../Login/LoginPage";
import HomePage from "../Home/HomePage";
import QrCode from "../QRCODE/QrCode";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/authContext";
import { PagesContext } from "../../context/pagesContext";

const Main = () => {
  const authStore = useContext(AuthContext);
  const pageStore = useContext(PagesContext);

  useEffect(() => {
    authStore.loadAuth();
  }, [authStore.isLogged])

  const pageSwitcher = (page) => {
    switch (page) {
      case 'home':
        return <HomePage />

      case 'qrcode':
        return <QrCode />

      default:
        return null;
    }
  }

  return (
    <div style={{width: '100%', height: '80%', display: 'flex'}}>
      {!authStore.isLogged ? <LoginPage /> : pageSwitcher(pageStore.page)}
    </div>
  )
}

export default Main;