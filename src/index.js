import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = document.getElementById('my-extension-root');
if (root) {
  ReactDOM.createRoot(root).render(<App />);
}