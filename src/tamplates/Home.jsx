import React from 'react'
import { Link } from 'react-router-dom'
import './css/Home.css'
import './assets/img/favicon.png'
import './assets/img/apple-touch-icon.png'
import './assets/vendor/aos/aos.css'
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './assets/vendor/boxicons/css/boxicons.min.css'
import './assets/vendor/glightbox/css/glightbox.min.css'
import './assets/vendor/swiper/swiper-bundle.min.css'
import './assets/css/style.css'

export default function Home() {
    return (
        <div className="jumbotron config_back">

            <section id="hero" className="d-flex align-items-center">
                <div className="container" >
                    <h1>Welcome to <span>OpenXCOD</span></h1>
                    <h2>We are team of talented designers making websites with Bootstrap</h2>
                    <div className="d-flex">
                        <Link to="/" href="#about" className="btn-get-started scrollto">Get Started</Link>
                    </div>
                </div>
            </section>
            {/* <div className="container d-flex align-items-center justify-content-between">
                        <h1 className="logo"><Link to="/">OpenXCOD<span>.</span></Link></h1>
                        <nav id="navbar" className="navbar">
                            <ul>
                                <li><Link to="/" className="nav-link scrollto">Home</Link></li>

                                <li><Link to="/noticias" className="nav-link scrollto" href="#about">Noticias</Link></li>
                                <li><Link to="/tools" className="nav-link scrollto" href="#services">Ferramentas</Link></li>
                                <li><Link to="/" className="nav-link scrollto " href="#portfolio">Portfolio</Link></li>
                                <li><Link to="/" className="nav-link scrollto" href="#team">Entretenimento</Link></li>
                                <li className="dropdown"><Link to="/" href="#"><span>API</span> <i className="bi bi-chevron-down"></i></Link>
                                    <ul>
                                        <li><Link to="/news" href="#">News Teste</Link></li> */}
            {/* <li className="dropdown"><Link to="/" href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></Link>
                                        <ul>
                                            <li><Link to="/" href="#">Deep Drop Down 1</Link></li>
                                            <li><Link to="/" href="#">Deep Drop Down 2</Link></li>
                                            <li><Link to="/" href="#">Deep Drop Down 3</Link></li>
                                            <li><Link to="/" href="#">Deep Drop Down 4</Link></li>
                                            <li><Link to="/" href="#">Deep Drop Down 5</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/" href="#">Drop Down 2</Link></li>
                                    <li><Link to="/" href="#">Drop Down 3</Link></li>
                                    <li><Link to="/" href="#">Drop Down 4</Link></li> */}
            {/* </ul> */}
            {/* </li> */}
            {/* <li><Link to="/" className="nav-link scrollto" href="#contact">Contact</Link></li> */}
            {/* </ul> */}
            {/* <i className="bi bi-list mobile-nav-toggle"></i> */}
            {/* </nav> */}
            {/* </div> */}
        </div>
    )
}