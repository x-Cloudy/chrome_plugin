import { LoginPage } from "../Login/LoginPage";
import { LeadsPage } from "../Leads/LeadsPage"
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

      case 'Reservas': 
        return <LeadsPage />

      case 'qrcode':
        return <QrCode />

      default:
        return <HomePage />;
    }
  }

  return (
    <div style={{width: '100%', height: '75%', display: 'flex', justifyContent: 'center', alignItems: 'start'}}>
      {!authStore.isLogged ? <LoginPage /> : pageSwitcher(pageStore.page)}
    </div>
  )
}

export default Main;