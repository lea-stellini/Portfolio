import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './layouts/Header/Header'
import Footer from './layouts/Footer/Footer'
import App from './pages/App/App'
import Error from './pages/Error/Error'
import Project from './pages/Project/Project'
import './index.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/project/:id" element={<Project />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
        <Footer />
      </Router>
    </HashRouter>
  </React.StrictMode>,
)
