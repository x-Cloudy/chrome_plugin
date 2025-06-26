import { useEffect } from "react";
import { usePages } from "../../context/pagesContext";

const CurrentPage = () => {
  console.log('current page render');
  const { page } = usePages()
  console.log(`current page`, page);

  useEffect(() => {
    console.log('pages changed', page)
  }, [page])

  return (
    <div style={page === 'chat' ? { width: '400px'} : { width: '0px' }}>
      teste
      <p>fasdfasdfasdf</p>
    </div>
  );
}

export default CurrentPage;