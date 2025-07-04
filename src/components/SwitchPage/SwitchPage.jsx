import { LoginPage } from "../../pages/Login/LoginPage";
import AddFilter from "../AddFilter/AddFilter";
import ContactInfo from "../ContactInfo/ContactInfo";

const SwitchPage = ({ page }) => {

  const Pages = () => {
    switch (page) {
      case "login":
        return <LoginPage />;

      case "plus":
        return <AddFilter />;

      case "infos": 
        return <ContactInfo />

      default:
        return <></>;  
    }
  }

  return (
    <div style={{background: 'white', height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '99'}}>
      <Pages />
    </div>
  )
}

export default SwitchPage;