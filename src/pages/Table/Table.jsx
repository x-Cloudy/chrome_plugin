import CloseBtn from "../../components/Buttons/CloseBtn";
import { MdEdit, MdDelete } from "react-icons/md";
import Filters from "./components/Filters";
import useRecontact from "../../service/recontact.service";
import { useEffect } from "react";
import "./Table.css"

const TablePage = () => {
  const recontact = useRecontact();
  const data = [
    { nome: 'Luana', telefone: '5511911112222', adultos: '2 Adultos', chd: '10 anos' },
    { nome: 'Roberta', telefone: '5511911112222', adultos: '3 Adultos', chd: '15 anos' },
    { nome: 'Larissa', telefone: '5511911112222', adultos: '2 Adultos', chd: '15 anos' },
    { nome: 'Jéssica', telefone: '5511911112222', adultos: '1 Adulto', chd: '15 anos' },
    { nome: 'Ana Paula', telefone: '5511911112222', adultos: '3 Adultos', chd: '15 anos' },
    { nome: 'Mirella', telefone: '5511911112222', adultos: '2 Adultos', chd: '15 anos' },
    { nome: 'Giovanna', telefone: '5511911112222', adultos: '3 Adultos', chd: '15 anos' },
    { nome: 'Lucas', telefone: '5511911112222', adultos: '4 Adultos', chd: '15 anos' },
    { nome: 'João', telefone: '5511911112222', adultos: '3 Adultos', chd: '15 anos' },
    { nome: 'Oscar', telefone: '5511911112222', adultos: '2 Adultos', chd: '15 anos' },
  ];

  useEffect(async () => {
    console.log('ativou');
    await recontact.getContact()
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
                <td>{item.nome}</td>
                <td>{item.telefone}</td>
                <td>Qualquer</td>
                <td>Janeiro/2026</td>
                <td>Fevereiro/2026</td>
                <td>{item.adultos}</td>
                <td>{item.chd}</td>
                <td>Nacional</td>
                <td>Férias</td>
                <td style={{ width: 'auto', gap: '2rem' }}>
                  <button className="custom-table-action-btn">
                    <MdEdit />
                  </button>
                  <button style={{color: 'red'}} className="custom-table-action-btn">
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