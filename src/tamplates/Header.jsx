import React from 'react'
import { Link } from 'react-router-dom'


export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">OpenXCOD</Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/noticias" className="nav-link">Noticias</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/conversor" className="nav-link">Conversor</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/calculadora" className="nav-link">Calculadora</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/criacao-de-sites" className="nav-link">Criação de Sites</Link>
                    </li>
                </ul>

            </div>

            <nav class="navbar navbar-dark bg-dark">
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-info" type="submit">Search</button>
                </form>
            </nav>
            <form className="form-inline my-2 my-lg-0">
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Login</button>
            </form>

        </nav>


    )
}

