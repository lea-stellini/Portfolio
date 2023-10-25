import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './layouts/Header/Header'
import Footer from './layouts/Footer/Footer'
import App from './pages/App/App'
import Error from './pages/Error/Error'
import Project from './pages/Project/Project'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
        <Header />
        <Routes>
          <Route path="/Portfolio-pro/" element={<App />}></Route>
          <Route path="/Portfolio-pro/project/:id" element={<Project />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
        <Footer />
    </Router>
  </React.StrictMode>,
)
