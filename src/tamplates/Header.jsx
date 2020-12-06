import React from 'react';
import { Link } from 'react-router-dom'

import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';


export default function Header(props) {

    // const [isOpen, setIsOpen] = useState(false);

    // const toggle = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <div className="container">
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
                            <Link to="/tools" className="nav-link">Ferramentas</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/criacao-de-sites" className="nav-link">Criação de Sites</Link>
                        </li>

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>Outro Seriviços</DropdownToggle>
                                <DropdownMenu right><DropdownItem>Conversor de Particulas</DropdownItem>
                                <DropdownItem>Prototipo Jarvis</DropdownItem>
                                
                            </DropdownMenu>
                        </UncontrolledDropdown>

                    </ul>
                </div>

                <form className="form-inline my-2 my-lg-0">
                     <Link to="#" className="btn btn-outline-primary">Sign up</Link>
                </form>
                
            </div>
        </nav>

    )
}

