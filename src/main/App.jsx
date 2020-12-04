import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'jquery'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'

import Router from './Routes'
import Header from '../tamplates/Header'
// import Footer from '../tamplates/Footer'

export default function App() {
  return (
    <BrowserRouter>
        <Header />
        {/* <Footer /> */}
        <Router />
    </BrowserRouter>
  )
}