import { useEffect, useContext } from "react";
import { usePages } from "../../context/pagesContext";
import SwitchPage from "../SwitchPage/SwitchPage";
import { AuthContext } from "../../context/authContext";

const CurrentPage = () => {
  const { page } = usePages();
  const authStore = useContext(AuthContext);

  const activePageStyle = {
    width: '500px', 
    height: '100%', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  useEffect(() => {
    authStore.loadAuth();
  }, [])

  return (
    <div style={page !== '' ? activePageStyle : { width: '0px' }}>
      <SwitchPage page={page} />
    </div>
  );
}

export default CurrentPage;