import React from 'react'
import ReactDOM from 'react-dom/client'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// import "bootstrap/dist/css/bootstrap.min.css"
import App from './App.jsx'
import "./assets/styles/index.css"
import './assets/styles/bootstrap.custom.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)