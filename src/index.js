// index.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createPortal } from 'react-dom'
import App from './App'
import CurrentPage from './components/CurrentPage/CurrentPage'
import { PagesProvider } from './context/pagesContext'

const sideExtension = document.getElementById('extension-side-bar')
const currentPageEl = document.getElementById('current_extension_page')

const hiddenRoot = document.createElement('div')
hiddenRoot.style.display = 'none'
document.body.appendChild(hiddenRoot)

function RootWrapper() {
  return (
    <PagesProvider>
      {sideExtension && createPortal(<App />, sideExtension)}
      {currentPageEl && createPortal(<CurrentPage />, currentPageEl)}
    </PagesProvider>
  )
}

// Finalmente, monta tudo numa única root
ReactDOM.createRoot(hiddenRoot).render(<RootWrapper />)
