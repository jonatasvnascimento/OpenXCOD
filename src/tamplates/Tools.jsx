import React from 'react'
import { Link } from 'react-router-dom'

export default function Tools() {
    return (
        <div classNameName="container">
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                <h5 className="my-0 mr-md-auto font-weight-normal">OpenXCOD</h5>
                <nav className="my-2 my-md-0 mr-md-3">
                    <a className="p-2 text-dark" href="#">Features</a>
                    <a className="p-2 text-dark" href="#">Enterprise</a>
                    <a className="p-2 text-dark" href="#">Support</a>
                    <a className="p-2 text-dark" href="#">Pricing</a>
                </nav>
                <Link to="#" className="btn btn-outline-primary">Sign up</Link>
            </div>
        </div>
    )
}