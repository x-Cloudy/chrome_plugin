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
      {currentPageEl && createPortal(<CurrentPage />, currentPageEl)}
      {sideExtension && createPortal(<App />, sideExtension)}
    </PagesProvider>
  )
}

ReactDOM.createRoot(hiddenRoot).render(<RootWrapper />)
