import React from 'react'
import { Link } from 'react-router-dom'

export default function LinkTools(props) {
    return (
        <div className="col-12 col-sm-2 col-md-4 col-lg-3 col-xl-3">
            <div className="card text-white bg-dark mb-3">
                <div className="card-header">{props.title}</div>
                <div className="card-body">
                    <p className="card-text">{props.description}</p>
                    <Link to={props.linkgo} className="btn btn-secondary">Começar</Link>
                </div>
            </div>
        </div>

    )
}