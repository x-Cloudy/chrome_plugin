import CloseBtn from "../../components/Buttons/CloseBtn";
import "./Table.css"

const TablePage = () => {
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

  return (
    <div className="table-container">
      <div style={{ position: 'absolute', top: '63px', right: '73px' }}>
        <CloseBtn />
      </div>
      <div className="table-filter">

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
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default TablePage;