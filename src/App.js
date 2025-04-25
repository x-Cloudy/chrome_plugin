import Popup from './components/Popup/Popup';
import AuthProvider from './context/authContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Popup />
    </AuthProvider>
  )
}

export default App;
