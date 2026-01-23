import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

// Import global styles
import './styles/theme.css'
import './index.css'
import './App.css'

// Force scroll to top before React renders
window.scrollTo(0, 0)
document.documentElement.scrollTop = 0

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
