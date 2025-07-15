import { IoClose } from "react-icons/io5";
import { usePages } from "../../context/pagesContext";

const CloseBtn = () => {
  const { setCurrentPage, setIsAllPage } = usePages()

  const reset = () => {
    setCurrentPage('');
    setIsAllPage(false);
  }

  return (
    <button
      onClick={() => reset()}
      style={{
        background: 'rgba(10, 8, 65, 1)',
        borderRadius: '50%',
        color: 'white',
        width: '28px',
        height: '28px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
      }}>
      <IoClose />
    </button>
  )
}

export default CloseBtn;