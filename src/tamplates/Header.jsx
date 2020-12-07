import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (

        <Navbar light expand="md shadow-sm">
            <div className="container">
                    <Link to="/" className="navbar-brand">OpenXCOD</Link>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <Link to="/" className="nav-link">Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/noticias" className="nav-link">Noticias</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/tools" className="nav-link">Ferramentas</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/criacao-de-sites" className="nav-link">Criação de Sites</Link>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>Outro Seriviços</DropdownToggle>
                                <DropdownMenu right><DropdownItem>Conversor de Particulas</DropdownItem>
                                    <DropdownItem>Prototipo Jarvis</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
            </div>
        </Navbar>
    );
}

export default Example;