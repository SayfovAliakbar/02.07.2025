import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '../i18n.js'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Suspense>
  </StrictMode>,
)
