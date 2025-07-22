import CloseBtn from '../Buttons/CloseBtn';
import { HiMenuAlt2 } from "react-icons/hi";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { GoEye } from "react-icons/go";
import { MdOutlineModeEdit } from "react-icons/md";
import InputText from '../Inputs/Text/InputText';
import './AddFilter.css'
import { useState } from 'react';

const AddFilter = () => {
  const items = ['Não lidas', 'Respondeu', 'Não Respondeu', 'Concluídos'];
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState('');

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
              <div style={{
                display: 'flex',
                flexWrap: 'nowrap',
                width: 'auto',
                alignItems: 'center'
              }}>
                <HiMenuAlt2 className='item-icon' />
                <p className='filter-text'>{item}</p>
              </div>

              <div style={{ gap: '0.7rem', display: 'flex' }}>
                <button className='item-icon'><MdOutlineModeEdit /></button>
                <button className='item-icon'><FaRegTrashAlt /></button>
                <button className='item-icon'><GoEye /></button>
              </div>
            </div>
          )
        })}
      </div>

      {isOpen &&
        <div style={{ display: 'flex', flexWrap: 'nowrap', width: '100%', marginTop: '1rem' }}>
          <InputText onChange={(e) => setFilter(e.target.value)} field={'filter'} placeholder={'Adicione um novo filtro'} />
          <button className='add-filter-plus'>
            <FiPlus />
          </button>
        </div>
      }

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`add-filter-btn${isOpen ? ' active-add' : ''}`}>
        {isOpen ? "Fechar" : "Adicionar"}
      </button>
    </div>
  )
}

export default AddFilter;