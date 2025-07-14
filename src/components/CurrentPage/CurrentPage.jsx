import { useEffect, useContext } from "react";
import { usePages } from "../../context/pagesContext";
import { AuthContext } from "../../context/authContext";
import SwitchPage from "../SwitchPage/SwitchPage";

const CurrentPage = () => {
  const { page, isAllPage } = usePages();
  const authStore = useContext(AuthContext);

  const activePageStyle = {
    width: '500px',
    minWidth: '500px',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const getPageStyle = () => {
    if (!page || isAllPage) return { width: '0px' };
    if (page === 'gerenciar') return { width: '0px' };
    return activePageStyle;
  };

  useEffect(() => {
    authStore.loadAuth();
  }, [authStore]);

  return (
    <div style={getPageStyle()}>
      <SwitchPage page={page} />
    </div>
  );
};

export default CurrentPage;