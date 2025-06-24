import ReactDOM from 'react-dom/client';
import App from './App';

const side_extension = document.getElementById('extension-side-bar')

if (side_extension) {
  ReactDOM.createRoot(side_extension).render(<App />);
}
