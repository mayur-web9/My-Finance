import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Transactions from './components/transactions.jsx'
import Accounts from './components/accounts.jsx'
import Dashboard from './components/dashboard.jsx'
import Settings from './components/settings.jsx'
import NewLogin from './components/NewLogin.jsx'
import HelpSupport from './components/HelpSupport.jsx'
import NotFound from './components/NotFound.jsx'
import useStore from './store/index.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path='/' element={<App />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/accounts" element={<Accounts />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/NewLogin" element={<NewLogin />} />
      <Route path="/HelpSupport" element={<HelpSupport />} />
      <Route path='*' element={<NotFound />} />

    </Routes>
    </Router>
  </React.StrictMode>,
)