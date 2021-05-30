import React from 'react'
import './css/Footer.css'
import { Link } from 'react-router-dom'


export default function Footer(props) {
    return (
        <footer className="text-center text-lg-start  text-muted container ">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                    <span>Se conecte a OpenXCOD atraves das redes sociais:</span>
                </div>
                <div>
                    <Link className="me-4 text-reset" to="">
                        <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link className="me-4 text-reset" to="">
                        <i className="fab fa-twitter"></i>
                    </Link>
                    <Link className="me-4 text-reset" to="">
                        <i className="fab fa-google"></i>
                    </Link>
                    <Link className="me-4 text-reset" to="">
                        <i className="fab fa-instagram"></i>
                    </Link>
                    <Link className="me-4 text-reset" to="">
                        <i className="fab fa-linkedin"></i>
                    </Link>
                    <Link className="me-4 text-reset" to="">
                        <i className="fab fa-github"></i>
                    </Link>

                </div>
            </section>

            <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4 " >
                                <Link to="/study"><i className="fas fa-play me-3 text_decoration"> Study Progress</i></Link>

                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum
                            dolor sit amet, consectetur adipisicing elit.</p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Products</h6>
                            <p>
                                <a href="#!" className="text-reset">Aplicativos</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Noticias</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">API</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Portifolio</a>
                            </p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links</h6>
                            <p>
                                <a href="#!" className="text-reset">Pricing</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Settings</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Orders</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Help</a>
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Contact</h6>
                            <p><i className="fas fa-home me-3"></i>Home</p>
                            <p><i className="fas fa-envelope me-3"></i>Email</p>
                            <p><i className="fas fa-robot me-3"></i>Skynet</p>

                        </div>
                    </div>
                </div>
            </section>
            <div className="text-center p-4">
                © 2021
        <a className="text-reset fw-bold text_decoration" href="https://openxcod.netlify.app/"> OpenXCOD</a>
            </div>

        </footer>
    )
}
