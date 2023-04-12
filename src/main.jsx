import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <div  className="relative z-0 bg-primary">
    <App />
    </div>
  </BrowserRouter>,
  
)
