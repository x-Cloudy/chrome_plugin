import { IoClose } from "react-icons/io5";
import { usePages } from "../../context/pagesContext";

const CloseBtn = () => {
  const { setCurrentPage } = usePages()

  return (
    <button
      onClick={() => setCurrentPage('')}
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