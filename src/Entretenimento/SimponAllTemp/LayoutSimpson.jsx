import React from 'react'
import { Link } from 'react-router-dom'
import '../Tamplate/css/features.css'

export default function LayoutSimpson(props) {
    return (
        <div className="container mt-3">

            <div className="container">
                <div className="card text-white bg-dark mb-3">
                    <div class="position-relative">
                        <div class="position-absolute top-0 start-0 zindex">
                            <h4 className="text-dark fw-light font text-center lh-1 ">{props.title}</h4>
                        </div>
                    </div>
                    <img className="card card-cover bg-dark tamanho" src={props.img} alt={props.img} />
                    <Link to={props.link} className="btn btn-dark">Assistir</Link>
                </div>
            </div>
        </div>
    )
}