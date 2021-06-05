import React from 'react'
import {Link} from 'react-router-dom'

export default function Entretenimento() {
    return(
        <div className="container mt-3">
             <div className="nav-scroller py-1 mb-2">
                    <nav className="nav d-flex justify-content-center">
                        <Link className="p-2 link-secondary" to="/seriados">Seriados</Link>
                        <Link className="p-2 link-secondary" to="/mundo">Filmes</Link>
                        <Link className="p-2 link-secondary" to="/mundo">Tecnologia</Link>
                        <Link className="p-2 link-secondary" to="/mundo">Games</Link>
                        <Link className="p-2 link-secondary" to="/mundo">Filmes</Link>
                        
                    </nav>
                </div>
        </div>
    )
}