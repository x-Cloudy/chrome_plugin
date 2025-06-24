import { useContext, useState } from "react";
import { PagesContext } from "../../context/pagesContext";
import './sideBar.css'

const SideBar = () => {
  const pageStore = useContext(PagesContext);

  return (
    <div className="side-container" style={{width: '60px'}}>
      <button onClick={() => console.log('clickado')}>
        Teste
      </button>
    </div>
  )
}

export default SideBar;