import { useContext } from "react";
import { PagesContext } from "../../context/pagesContext";

const HomePage = () => {
  const pageStore = useContext(PagesContext);

  return (
    <>
      <p>HOME PAGE</p>

      <button onClick={() => pageStore.setCurrentPage('qrcode')} >set qrcode</button>
    </>
  )
}

export default HomePage;