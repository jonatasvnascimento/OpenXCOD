import React from 'react'
import { Link } from 'react-router-dom'
import LinkEntreternimento from '../LinkEntreternimento'

import './css/features.css'

export default function Entretenimento() {
    return (
        <div className="container mt-3">
            <div className="nav-scroller py-1 mb-2">
                <nav className="nav d-flex justify-content-center">
                    <Link className="p-2 link-secondary" to="/seriados">Seriados</Link>
                    <Link className="p-2 link-secondary" to="/seriados">Filmes</Link>
                    <Link className="p-2 link-secondary" to="/seriados">Tecnologia</Link>
                    <Link className="p-2 link-secondary" to="/seriados">Games</Link>
                    <Link className="p-2 link-secondary" to="/seriados">Filmes</Link>

                    <LinkEntreternimento title="Simpsons all temp"></LinkEntreternimento>

                </nav>
            </div>
        </div>
    )
}