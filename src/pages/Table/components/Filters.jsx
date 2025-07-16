import "./Filters.css"
import InputText from "../../../components/Inputs/Text/InputText"
import { IoIosSearch } from "react-icons/io";

const Filters = () => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log('Form data:', data);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: '1rem' }}>
      <InputText field={'name'} placeholder={'Nome'} />
      <InputText field={'phone'} placeholder={'Telefone'} />
      <InputText field={'ship'} placeholder={'Navio'} />
      <InputText type="date" field={'date_start'} placeholder={'Data Inicio'} />
      <InputText type="date" field={'date_end'} placeholder={'Data fim'} />
      <InputText field={'adults'} placeholder={'Adultos'} />
      <InputText field={'CHD'} placeholder={'CHD'} />
      <InputText field={'destiny'} placeholder={'Destino'} />

      <button style={{ fontSize: '23px'}} className="table-custom-action-btn" type="submit"><IoIosSearch /></button>
      <button style={{ fontSize: '15px'}} className="table-custom-action-btn"  type="button">Redefinir</button>
    </form>
  )
}

export default Filters;