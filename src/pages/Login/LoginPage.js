import Login from "../../components/Login/Login"
import mainLogo from "../../assets/main_logo"

export const LoginPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', width: '100%', marginTop: '-3rem' }}>
      <img src={mainLogo} alt="logo" style={{ width: '210px', marginLeft: '1.5rem' }} />
      <p style={{ fontSize: '28px', fontWeight: '800', textAlign: 'center', color: 'rgba(10, 8, 65, 1)', margin: '1rem', fontFamily: 'Roboto' }}>Bem-vindo</p>
      <Login />
    </div>
  )
}