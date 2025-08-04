import CloseBtn from "../../components/Buttons/CloseBtn";
import { MdEdit, MdDelete } from "react-icons/md";
import Filters from "./components/Filters";
import { useRecontactContext } from "../../context/RecontactContext";
import { useEffect } from "react";
import "./Table.css"

const TablePage = () => {
  const { data, handleFetchData } = useRecontactContext();

  const fetchData = async () => {
    await handleFetchData();
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="table-container">
      <div style={{ position: 'absolute', top: '50px', right: '55px' }}>
        <CloseBtn />
      </div>
      <div className="table-filter">
        <Filters />
      </div>

      <div className="table-content">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Telefone</th>
              <th>Navio</th>
              <th>Data início</th>
              <th>Data fim</th>
              <th>Adultos</th>
              <th>CHD</th>
              <th>Destino</th>
              <th>Desejo</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.ship}</td>
                <td>{item.init_date}</td>
                <td>{item.end_date || 'Não disponível'}</td>
                <td>{item.adults}</td>
                <td>{item.childrens}</td>
                <td>{item.destiny}</td>
                <td>{item.desire}</td>
                <td style={{ width: 'auto', gap: '2rem' }}>
                  <button className="custom-table-action-btn">
                    <MdEdit />
                  </button>
                  <button style={{ color: 'red' }} className="custom-table-action-btn">
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default TablePage;