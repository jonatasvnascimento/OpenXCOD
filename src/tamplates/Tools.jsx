import React from 'react'
import { Link } from 'react-router-dom'

export default function Tools() {
    return (
        <div className="container mt-4">
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">Ferramentas</h1>
                <p className="lead">Area destina a Ferramentas para auxiliar trabalhos da faculdade, calculos matematicos, entre outros...</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-2 col-md-4 col-lg-3 col-xl-3">
                        <div className="card text-white bg-dark mb-3 teste">
                            <div className="card-header">Cabeçalho</div>
                            <div className="card-body">
                                <h5 className="card-title">Título de Card Dark</h5>
                                <p className="card-text">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
                                <Link to="/teste" className="btn btn-secondary mb-2 mr-2">Go</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-2 col-md-4 col-lg-3 col-xl-3">
                        <div className="card text-white bg-dark mb-3 teste">
                            <div className="card-header">Cabeçalho</div>
                            <div className="card-body">
                                <h5 className="card-title">Título de Card Dark</h5>
                                <p className="card-text">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
                                <Link to="/teste" className="btn btn-secondary mb-2 mr-2">Go</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-2 col-md-4 col-lg-3 col-xl-3">
                        <div className="card text-white bg-dark mb-3 teste">
                            <div className="card-header">Cabeçalho</div>
                            <div className="card-body">
                                <h5 className="card-title">Título de Card Dark</h5>
                                <p className="card-text">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
                                <Link to="/teste" className="btn btn-secondary mb-2 mr-2">Go</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-2 col-md-4 col-lg-3 col-xl-3">
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
        </div>

    )
}