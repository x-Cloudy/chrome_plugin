import { useEffect } from "react";
import { usePages } from "../../context/pagesContext";
import SwitchPage from "../SwitchPage/SwitchPage";

const CurrentPage = () => {
  console.log('current page render');
  const { page } = usePages()
  console.log(`current page`, page);

  useEffect(() => {
    console.log('pages changed', page)
  }, [page])

  return (
    <div style={page !== '' ? { width: '400px'} : { width: '0px' }}>
      <SwitchPage />
    </div>
  );
}

export default CurrentPage;