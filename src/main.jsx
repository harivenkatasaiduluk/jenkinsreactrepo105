import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'npm install react react-dom

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
