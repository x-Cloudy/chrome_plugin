import InputController from "../../../components/Inputs/InputControler/InputController";
import { IoIosSearch } from "react-icons/io";
import TableService from "../../../service/table.service";
import { useEffect, useState } from "react";
import "./Filters.css"

const Filters = ({ onFilter }) => {
  const service = TableService();
  const [filters, setFilters] = useState({
    destiny: [],
    ship: []
  });

  const fetchData = async () => {
    const { data: ship } = await service.getShipFilterData();
    const { data: destiny } = await service.getDestityFilterData();

    setFilters(prev => ({
      ship: ship.data,
      destiny: destiny.data
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    onFilter(data)
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <form onSubmit={(e) => handleSubmit(e)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', width: '100%' }}>

      <div style={{ width: '70%', display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
        <InputController
          onChange={(e) => {}}
          label={'Navio'}
          field={'ship'}
          placeholder={''}
          type={'select'}
          options={filters.ship}
          customLabel={'ship'}
        />

        <InputController
          onChange={(e) => {}}
          label={'Destino'}
          field={'destiny'}
          placeholder={''}
          type={'select'}
          options={filters.destiny}
          customLabel={'name'}
        />
      </div>

      <div style={{ width: '200px', display: 'flex', flexWrap: 'nowrap', gap: '1rem' }}>
        <button style={{ fontSize: '23px' }} className="table-custom-action-btn" type="submit"><IoIosSearch /></button>
        <button style={{ fontSize: '15px' }} className="table-custom-action-btn" type="button">Redefinir</button>
      </div>
    </form>
  )
}

export default Filters;