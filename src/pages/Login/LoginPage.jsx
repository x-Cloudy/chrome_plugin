import Login from "../../components/Login/Login.jsx"
import mainLogo from "../../assets/main_logo.js"

export const LoginPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start', width: '100%', marginTop: '-200px' }}>
      <img src={mainLogo} alt="logo" style={{ width: '210px' }} />
      <p style={{ fontSize: '28px', fontWeight: '800', textAlign: 'center', color: 'rgba(10, 8, 65, 1)', margin: '1rem', fontFamily: 'Roboto' }}>Bem-vindo</p>
      <Login />
    </div>
  )
}