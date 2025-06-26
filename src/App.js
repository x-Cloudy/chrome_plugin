import SideBar from './components/SideBar/SideBar.jsx'
import AuthProvider from './context/authContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <SideBar />
    </AuthProvider>
  )
}

export default App;
