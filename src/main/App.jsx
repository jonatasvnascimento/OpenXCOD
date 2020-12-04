import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'jquery'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'
import Header from '../tamplates/Header'
import Home from '../tamplates/Home'



export default function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes />
    </BrowserRouter>
  )
}