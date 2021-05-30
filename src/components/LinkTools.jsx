import React from 'react'
import { Link } from 'react-router-dom'

export default function LinkTools(props) {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 ">
            <div className="card text-white bg-dark mb-3">
                <div className="card-header">{props.title}</div>
                <div className="card-body">
                        <h2 class=" mb-4 display-7 lh-1 fw-bold">{props.title}</h2>
                    <ul class="d-flex list-unstyled mt-auto">
                        <li class="me-auto">
                            {props.icon}
                        </li>
                        <li class="d-flex align-items-center me-3">
                            <svg class="bi me-2" width="1em" height="1em"></svg>
                            <small>Earth</small>
                        </li>
                        <li class="d-flex align-items-center">
                            <svg class="bi me-2" width="1em" height="1em"></svg>
                            <small>3d</small>
                        </li>
                    </ul>
                        <Link to={props.linkgo} className="btn btn-secondary">Começar</Link>
                </div>
            </div>
        </div>

        // <div className="col-12 col-sm-2 col-md-4 col-lg-3 col-xl-3">
        //     <div className="card text-white bg-dark mb-3">
        //         <div className="card-header">{props.title}</div>
        //         <div className="card-body">
        //             <p className="card-text">{props.description}</p>
        //             <Link to={props.linkgo} className="btn btn-secondary">Começar</Link>
        //         </div>
        //     </div>
        // </div>

    )
}