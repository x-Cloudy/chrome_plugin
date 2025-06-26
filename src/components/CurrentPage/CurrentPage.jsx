import { usePages } from "../../context/pagesContext";

const CurrentPage = () => {
  const { page } = usePages()

  return (
    <div style={page === 'chat' ? { width: '400px'} : { width: '0px' }}>

    </div>
  );
}

export default CurrentPage;