import CloseBtn from '../Buttons/CloseBtn';
import { HiMenuAlt2 } from "react-icons/hi";
import { FaRegTrashAlt  } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { GoEye } from "react-icons/go";
import { MdOutlineModeEdit } from "react-icons/md";
import InputText from '../Inputs/Text/InputText';
import { useEffect, useState } from 'react';
import { usePages } from '../../context/pagesContext';
import FiltersService from '../../service/filters.service';
import './AddFilter.css'

const AddFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { filters, setFilters, clearFilters } = usePages();
  const [newFilter, setNewFilter] = useState('');
  const [edit, setEdit] = useState({});
  const service = new FiltersService();

  const handleSetFilter = async () => {
    await service.postFilters(newFilter);
    const response = await service.getFilters();
    clearFilters();
    setFilters(response.data);
  }

  const handleDeleteFilter = async (id) => {
    await service.deleteFilters({ id: id });
    const response = await service.getFilters();
    clearFilters();
    setFilters(response.data);
  }

  const handleEditFilter = async (item) => {
    await service.putFilters({ id: item.id, value: newFilter });
    setNewFilter('');
    const response = await service.getFilters();
    clearFilters();
    setFilters(response.data);
  }

  useEffect(() => {
    console.log('how filter is', filters)
  }, [filters])

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
              {edit.id !== item.id ?
                <>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'nowrap',
                    width: 'auto',
                    alignItems: 'center'
                  }}>
                    <HiMenuAlt2 className='item-icon' />
                    <p className='filter-text'>{item.settings}</p>
                  </div>

                  <div style={{ gap: '0.7rem', display: 'flex' }}>
                    <button onClick={() => setEdit(item)} className='item-icon'><MdOutlineModeEdit /></button>
                    <button onClick={() => handleDeleteFilter(item.id)} className='item-icon'><FaRegTrashAlt /></button>
                    <button className='item-icon'><GoEye /></button>
                  </div>
                </>
                :
                <div style={{ display: 'flex', flexWrap: 'nowrap', width: '100%'}}>
                  <InputText value onChange={(e) => setNewFilter(e.target.value)} field={'filter'} placeholder={item.settings} />
                  <button onClick={() => handleEditFilter(item)} className='add-filter-plus'>
                    <FiPlus />
                  </button>
                  <button onClick={() => setEdit({})} className='remove-filter-btn'>
                    <IoMdClose />
                  </button>
                </div>}
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