import CloseBtn from '../Buttons/CloseBtn';
import { HiMenuAlt2 } from "react-icons/hi";
import { FaRegTrashAlt } from "react-icons/fa";
import { GoEye } from "react-icons/go";
import { MdOutlineModeEdit } from "react-icons/md";
import './AddFilter.css'

const AddFilter = () => {
  const items = ['Não lidas', 'Respondeu', 'Não Respondeu', 'Concluídos']

  return (
    <div className='container'>
      <div className='top-section'>
        <h6 className='title-page'>Configurações de guia</h6>
        <CloseBtn />
      </div>

      <div className='list-section'>
        {items.map((item) => {
          return (
            <div className='list-items-row'>
              <div style={{ display: 'flex', flexWrap: 'nowrap', width: 'auto', alignItems: 'center'}}>
                <HiMenuAlt2 className='item-icon'/>
                <p className='filter-text'>{item}</p>
              </div>

              <div style={{ gap: '0.5rem', display: 'flex' }}>
                <button className='item-icon'><MdOutlineModeEdit /></button>
                <button className='item-icon'><FaRegTrashAlt /></button>
                <button className='item-icon'><GoEye /></button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AddFilter;