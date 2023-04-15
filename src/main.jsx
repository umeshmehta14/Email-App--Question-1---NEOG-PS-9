import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { BrowserRouter as Router } from 'react-router-dom'
import { DataContext, DataProvider } from './Contexts/DataContext'

export {DataContext};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <DataProvider>
    <App />
      </DataProvider>
    </Router>
  </React.StrictMode>,
)
