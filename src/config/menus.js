import { RiMenuSearchLine } from "react-icons/ri";
import { FaRegAddressCard, FaRegListAlt } from "react-icons/fa";
import { LuNotebookPen } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";

  const side_bar_menus = [
    {
      name: 'chat',
      icon: <RiMenuSearchLine />,
      type: 'right'
    },
    {
      name: 'infos',
      icon: <FaRegAddressCard />,
      type: 'right'
    },
    {
      name: 'notes',
      icon: <LuNotebookPen />,
      type: 'right'
    },
    {
      name: 'table',
      icon: <FaRegListAlt />,
      type: 'all'
    },
    {
      name: 'plus',
      icon: <FaPlus />,
      type: 'right'
    }
  ];

  export default side_bar_menus;