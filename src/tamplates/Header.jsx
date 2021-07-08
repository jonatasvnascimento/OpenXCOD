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
                    <Link to="/" className="navbar-brand">OpenKodo</Link>
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
                                <Link to="/entretenimento" className="nav-link">Entretenimento</Link>
                            </NavItem>
                            {/* <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>Entretenimento</DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem><Link to="/filmes" className="text-decoration-none">Filmes</Link></DropdownItem>
                                    <DropdownItem><Link to="/endereco" className="text-decoration-none">Endereço</Link></DropdownItem>
                                    <DropdownItem><Link to="/Series" className="text-decoration-none">Series</Link></DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown> */}
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>API</DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem><Link to="/news" className="text-decoration-none">News Teste</Link></DropdownItem>
                                </DropdownMenu>
                                
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
            </div>
        </Navbar>
    );
}

export default Example;