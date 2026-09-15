import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>   {/* Routing implement ke liye main.jsx me App ko BrowserRouter tag me rakhna hota hai */} 
      <App />
    </BrowserRouter>   
  </StrictMode>,
)
