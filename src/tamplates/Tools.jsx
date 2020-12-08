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
                    <div className="col-sm-4 mb-3">
                        <div className="card text-white bg-dark mb-3">
                            <div className="card-body">
                                <h5 className="card-header text-center">Conversor</h5>
                                <p className="card-text mb-1">Plataforma de converção de texto, binario entre outros</p>
                            </div>
                            <div className="card-footer">
                                <Link to="/text-convert" className="btn btn-secondary">Começar</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mb-3">
                        <div className="card text-white bg-dark mb-3">
                            <div className="card-body">
                                <h5 className="card-header text-center">Calculadora Cientifica</h5>
                                <p className="card-text mb-1">Projeto calculadora Cientifica</p>
                            </div>
                            <div className="card-footer">
                                <Link to="#" className="btn btn-secondary">Começar</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}