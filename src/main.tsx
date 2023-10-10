import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './layouts/Header/Header'
import Footer from './layouts/Footer/Footer'
import App from './pages/App/App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,
)
