import { LoginPage } from "../../pages/Login/LoginPage";
import AddFilter from "../AddFilter/AddFilter";

const SwitchPage = ({ page }) => {

  const Pages = () => {
    switch (page) {
      case "login":
        return <LoginPage />;

      case "plus":
        return <AddFilter />;

      default:
        return <></>;  
    }
  }

  return (
    <div style={{background: 'white', height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Pages />
    </div>
  )
}

export default SwitchPage;