import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'
import Header from '../tamplates/Header'



export default function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes />
    </BrowserRouter>
  )
}