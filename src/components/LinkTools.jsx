import React from 'react'
import { Link } from 'react-router-dom'

export default function LinkTools(props) {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 ">
            <div className="card text-white bg-dark mb-3">
                <div className="card-header">{props.title}</div>
                <div className="card-body">
                    <h2 class=" mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h2>
                    <ul class="d-flex list-unstyled mt-auto">
                        <li class="me-auto">
                            <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white" />
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