import React from 'react'
import { Link } from 'react-router-dom'
import '../Tamplate/css/features.css'

export default function Entretenimento() {
    return (
        <div className="container mt-3">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 ">
                <div className="card text-white bg-dark mb-3">
                    <div class="card card-cover h-100 overflow-hidden text-white bg-dark  shadow-lg foto">
                        <div className="card-body">
                            <h4 className=" mb-5 display-7 lh-1 fw-bold">Simpson 1 temp</h4>
                            <ul className="d-flex list-unstyled mt-auto">
                                <li className="me-auto">
                                </li>
                                <li className="d-flex align-items-center me-3">
                                    <svg className="bi me-2" width="1em" height="1em"></svg>
                                    <small>1 temporada</small>
                                </li>
 
                            </ul>
                            <Link to="/simpson-1-temporada" className="btn btn-dark">Assistir</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}