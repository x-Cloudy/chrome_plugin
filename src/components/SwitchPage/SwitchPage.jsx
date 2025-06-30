import { LoginPage } from "../../pages/Login/LoginPage";

const SwitchPage = ({ page }) => {

  const Pages = () => {
    switch (page) {
      case "login":
        return <LoginPage />;

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