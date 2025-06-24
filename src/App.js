import SideBar from './components/SideBar/SideBar.jsx'
import AuthProvider from './context/authContext';
import { PagesProvider } from './context/pagesContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <PagesProvider>
        <SideBar />
      </PagesProvider>
    </AuthProvider>
  )
}

export default App;
