import CloseBtn from '../Buttons/CloseBtn';
import { HiMenuAlt2 } from "react-icons/hi";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { GoEye } from "react-icons/go";
import { MdOutlineModeEdit } from "react-icons/md";
import InputText from '../Inputs/Text/InputText';
import { useState } from 'react';
import { usePages } from '../../context/pagesContext';
import FiltersService from '../../service/filters.service';
import './AddFilter.css'

const AddFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { filters, setFilters } = usePages();
  const [newFilter, setNewFilter] = useState('');
  const service = new FiltersService();

  const handleSetFilter = async () => {
    await service.post("POST_FILTERS", newFilter);
    const response = await service.getFilters();
    setFilters(response.data.data);
  }

  return (
    <div className='container'>
      <div className='top-section'>
        <h6 className='title-page'>Configurações de guia</h6>
        <CloseBtn />
      </div>

      <div className='list-section'>
        {filters.map((item) => {
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
          <InputText onChange={(e) => setNewFilter(e.target.value)} field={'filter'} placeholder={'Adicione um novo filtro'} />
          <button onClick={() => handleSetFilter()} className='add-filter-plus'>
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