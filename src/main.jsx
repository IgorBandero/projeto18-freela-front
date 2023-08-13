import React from 'react'
import ReactDOM from 'react-dom/client'
import ResetCSS from './styles/ResetCSS.js'
import App from './App.jsx'
import GlobalCSS from './styles/GlobalCSS.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResetCSS />
    <GlobalCSS />
    <App />
  </React.StrictMode>
)
