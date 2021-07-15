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
           
        </div>
    )
}