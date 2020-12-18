import React from 'react'
import './css/Footer.css'
import { Link } from 'react-router-dom'


export default function Footer(props) {
    return (
        <div className="container footer-config">
            <footer className="pt-4 my-md-5 pt-md-5 border-top">
                <div className="row">
                    <div className="col-12 col-md">
                        <Link to="/" className="navbar-brand">OpenXCOD</Link>
                        <small className="d-block mb-3 text-muted">&copy; 2020-2021</small>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Features</h5>
                        <ul className="list-unstyled text-small">
                            <li><Link to="#" className="text-muted" >Cool stuff</Link></li>
                            <li><Link to="#" className="text-muted" >Random feature</Link></li>
                            <li><Link to="#" className="text-muted" >Team feature</Link></li>
                            <li><Link to="#" className="text-muted" >Stuff for developers</Link></li>
                            <li><Link to="#" className="text-muted" >Another one</Link></li>
                            <li><Link to="#" className="text-muted" >Last time</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Resources</h5>
                        <ul className="list-unstyled text-small">
                            <li><Link to="#" className="text-muted" >Resource</Link></li>
                            <li><Link to="#" className="text-muted" >Resource name</Link></li>
                            <li><Link to="#" className="text-muted" >Another resource</Link></li>
                            <li><Link to="#" className="text-muted" >Final resource</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>About</h5>
                        <ul className="list-unstyled text-small">
                            <li><Link to="#" className="text-muted" >Team</Link></li>
                            <li><Link to="#" className="text-muted" >Locations</Link></li>
                            <li><Link to="#" className="text-muted" >Privacy</Link></li>
                            <li><Link to="#" className="text-muted" >Terms</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}
