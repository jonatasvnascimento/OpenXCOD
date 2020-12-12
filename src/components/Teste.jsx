import React from 'react'
import './css/Teste.css'
import { Link } from 'react-router-dom'

export default function Teste() {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-sm-2 col-md-3 mb-3">
                    <div className="card text-white bg-dark mb-3 teste">
                        <div className="card-header">Cabeçalho</div>
                        <div className="card-body">
                            <h5 className="card-title">Título de Card Dark</h5>
                            <p className="card-text">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
                            <Link to="/teste" className="btn btn-secondary mb-2 mr-2">Go</Link>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>

    )
}