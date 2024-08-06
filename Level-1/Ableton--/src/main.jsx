import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Nav from './components/Nav'
import Card1 from './components/Card1'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Card1 />
  </React.StrictMode>,
)
