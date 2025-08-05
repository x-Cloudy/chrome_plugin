import "./Filters.css"
import InputController from "../../../components/Inputs/InputControler/InputController";
import { IoIosSearch } from "react-icons/io";

const Filters = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log('Form data:', data);
  }

  const shipOptions = [
    { value: 'option 1', label: 'Option 1' },
    { value: 'option 2', label: 'Option 2' },
    { value: 'option 3', label: 'Option 3' }
  ]

  const handleChange = (e) => {
    console.log('e', e)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', width: '100%' }}>

      <div style={{ width: '50%', display: 'flex', justifyContent: 'start', alignItems: 'center' }}>

        <InputController
          label={'Navio'}
          field={'ship'}
          placeholder={''}
          type={'select'}
          onChange={(e) => handleChange(e)}
          options={shipOptions} />

        <InputController
          label={'Destino'}
          field={'destiny'}
          placeholder={''}
          type={'select'}
          onChange={(e) => handleChange(e)}
          options={shipOptions} />
      </div>

      <div style={{width: '200px', display: 'flex', flexWrap: 'nowrap', gap: '1rem'}}>
        <button style={{ fontSize: '23px' }} className="table-custom-action-btn" type="submit"><IoIosSearch /></button>
        <button style={{ fontSize: '15px' }} className="table-custom-action-btn" type="button">Redefinir</button>
      </div>
    </form>
  )
}

export default Filters;