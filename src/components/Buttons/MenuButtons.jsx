import { usePages } from "../../context/pagesContext";

const MenuButton = ({ options }) => {
  const { name, icon, type } = options;
  const { page, setCurrentPage, setIsAllPage } = usePages();

  const handleClick = () => {
    setCurrentPage(name);

    if (type === 'all') {
      setIsAllPage(true);
    }

    if (type === 'right') {
      setIsAllPage(false);
    }
  }

  return (
    <button
      style={page === name ? { background: 'white', color: 'rgba(10, 8, 65, 1)' } :
        { background: 'transparent', color: 'white' }}
      className="menu-items"
      onClick={() => handleClick()}>
      {icon}
    </button>
  )
}

export default MenuButton;