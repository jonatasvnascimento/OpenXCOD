import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer(props) {
    return (
        <footer class="footer-area footer--light">
            <div class="footer-big">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-sm-12">
                            <div class="footer-widget">
                                <div class="widget-about">
                                    <img src="http://placehold.it/250x80" alt="" class="img-fluid" />
                                    <ul class="contact-details">
                                        <li>
                                            <span class="icon-earphones"></span> Telefone:
                                            <Link to="#" href="tel:344-755-111">55 11 3487-7741</Link>
                                        </li>
                                        <li>
                                            <span class="icon-envelope-open"></span>
                                            <Link to="#" href="mailto:support@aazztech.com">OpenXCOD@.void.com</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 col-sm-4">
                            <div class="footer-widget">
                                <div class="footer-menu footer-menu--1">
                                    <h4 class="footer-widget-title">Popular Category</h4>
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

                        <div class="col-md-3 col-sm-4">
                            <div class="footer-widget">
                                <div class="footer-menu">
                                    <h4 class="footer-widget-title">Our Company</h4>
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

                        <div class="col-md-3 col-sm-4">
                            <div class="footer-widget">
                                <div class="footer-menu no-padding">
                                    <h4 class="footer-widget-title">Help Support</h4>
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

            <div class="mini-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="copyright-text">
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
