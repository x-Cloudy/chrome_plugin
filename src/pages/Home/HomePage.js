import { useContext } from "react";
import { PagesContext } from "../../context/pagesContext";
import Menu from "../../components/Menu/Menu";

const HomePage = () => {
  const pageStore = useContext(PagesContext);

  return <Menu />;
}

export default HomePage;