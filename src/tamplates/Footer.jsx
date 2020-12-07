import React from 'react'
import './css/Footer.css'
import { Link } from 'react-router-dom'

// Mexer no tamanho do footer

export default function Footer(props) {
    return (
        
            <footer className="footer-area footer--light footer-config ">
                <div className="footer-big">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-12">
                                <div className="footer-widget">
                                    <div className="widget-about">
                                        <img src="http://placehold.it/250x80" alt="" className="img-fluid" />
                                        <ul className="contact-details">
                                            <li>
                                                <span className="icon-earphones"></span> Telefone:
                                            <Link to="#" href="tel:344-755-111">55 11 3487-7741</Link>
                                            </li>
                                            <li>
                                                <span className="icon-envelope-open"></span>
                                                <Link to="#" href="mailto:support@aazztech.com">OpenXCOD@.void.com</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-4">
                                <div className="footer-widget">
                                    <div className="footer-menu footer-menu--1">
                                        <h4 className="footer-widget-title">Popular Category</h4>
                                        <ul>
                                            <li>
                                                <Link to="#">Wordpress</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Plugins</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Joomla Template</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Admin Template</Link>
                                            </li>
                                            <li>
                                                <Link to="#">HTML Template</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-4">
                                <div className="footer-widget">
                                    <div className="footer-menu">
                                        <h4 className="footer-widget-title">Our Company</h4>
                                        <ul>
                                            <li>
                                                <Link to="#">About Us</Link>
                                            </li>
                                            <li>
                                                <Link to="#">How It Works</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Affiliates</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Testimonials</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Contact Us</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Plan &amp; Pricing</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Blog</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-4">
                                <div className="footer-widget">
                                    <div className="footer-menu no-padding">
                                        <h4 className="footer-widget-title">Help Support</h4>
                                        <ul>
                                            <li>
                                                <Link to="#">Support Forum</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Terms &amp; Conditions</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Support Policy</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Refund Policy</Link>
                                            </li>
                                            <li>
                                                <Link to="#">FAQs</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Buyers Faq</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Sellers Faq</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mini-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="copyright-text">
                                    <p>© 2021
                                <Link to="#" > OpenXCOD</Link> .All rights reserved. Created by
                                <Link to="#" > OpenXCOD</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
    )
}
