import Popup from './components/Popup/Popup';
import AuthProvider from './context/authContext';
import { PagesProvider } from './context/pagesContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <PagesProvider>
        <Popup />
      </PagesProvider>
    </AuthProvider>
  )
}

export default App;
