import React from 'react'
import './css/Tools.css'
import { Link } from 'react-router-dom'

export default function Tools() {
    return (
        <div className="container">
            <div className="row row-cols-0 row-cols-md-4 justify-content-center ">

                <div className="card-deck ">
                    <div className="card text-white bg-dark mb-3 mr-4 ">
                        <div className="card-body ">
                            <div className="card-header d-flex justify-content-center ">Conversor de Texto</div>
                            <p className="card-text ">Conversor de texto com muitas funcionabilidades</p>
                        </div>
                        <div className="card-footer">
                            <Link to="/text-convert" className="btn btn-primary ">Começar</Link>
                        </div>
                    </div>
                </div>
                <div className="card-deck ">
                    <div className="card text-white bg-dark mb-3 mr-4">
                        <div className="card-body ">
                            <div className="card-header d-flex justify-content-center ">Calculadora Cientifica</div>
                            <p className="card-text ">Projeto calculadora cientifica</p>
                        </div>
                        <div className="card-footer">
                            <Link to="/text-convert" className="btn btn-primary ">Começar</Link>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}