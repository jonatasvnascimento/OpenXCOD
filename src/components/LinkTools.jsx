import React from 'react'
import { Link } from 'react-router-dom'

export default function LinkTools(props) {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-sm-4 col-md-3 mb-3">
                    <div class="card text-white bg-dark mb-3 teste">
                        <div class="card-header">Cabeçalho</div>
                        <div class="card-body">
                            <h5 class="card-title">Título de Card Dark</h5>
                            <p class="card-text">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
                            <Link to="/teste" className="btn btn-secondary mb-2 mr-2">GO</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}