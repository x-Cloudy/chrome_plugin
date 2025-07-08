import { LoginPage } from "../../pages/Login/LoginPage";
import AddFilter from "../AddFilter/AddFilter";
import ContactInfo from "../ContactInfo/ContactInfo";
import ChatStartPage from "../../pages/Chat/ChatPage";
import ReminderPage from "../ReminderPage/ReminderPage";

const SwitchPage = ({ page }) => {

  const Pages = () => {
    switch (page) {
      case "login":
        return <LoginPage />;

      case "chat":
        return <ChatStartPage />;  

      case "plus":
        return <AddFilter />;

      case "notes":
        return <ReminderPage />;

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