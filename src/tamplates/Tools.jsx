import React from 'react'
import './css/Tools.css'
import { Link } from 'react-router-dom'

export default function Tools() {
    return (
        <div className="container">

            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">Ferramentas</h1>
                <p className="lead">Area destina a Ferramentas para auxiliar trabalhos da faculdade, calculos matematicos, entre outros...</p>
            </div>

            <div className="card-deck mb-3">
                <div className="row">

                    <div className="col-sm-3 mb-3">
                        <div className="card text-white bg-dark mb-3">
                            <div class="card-body">
                                <h5 class="card-header text-center">Converter Texto</h5>
                                <p class="card-text mb-1">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <Link to="#" className="btn btn-secondary">Começar</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 mb-3">
                        <div className="card text-white bg-dark mb-3">
                            <div class="card-body">
                                <h5 class="card-header text-center">Converter Texto</h5>
                                <p class="card-text mb-1">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <Link to="#" className="btn btn-secondary">Começar</Link>
                            </div>
                        </div>
                    </div>

                   

                </div>
            </div>
        </div>
    )
}