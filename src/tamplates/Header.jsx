import React from 'react';
import { Link } from 'react-router-dom'

const Example = (props) => {
    return (
        <div>
            <header id="header" className="d-flex align-items-center">
                <div className="container d-flex align-items-center justify-content-between">

                    <h1 className="logo"><Link to="/">OpenXCOD<span>.</span></Link></h1>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><Link to="/" className="nav-link scrollto">Home</Link></li>
                            
                            <li><Link to="/noticias" className="nav-link scrollto" href="#about">Noticias</Link></li>
                            <li><Link to="/tools" className="nav-link scrollto" href="#services">Ferramentas</Link></li>
                            <li><Link to="/" className="nav-link scrollto " href="#portfolio">Portfolio</Link></li>
                            <li><Link to="/" className="nav-link scrollto" href="#team">Entretenimento</Link></li>
                            <li className="dropdown"><Link to="/" href="#"><span>API</span> <i className="bi bi-chevron-down"></i></Link>
                                <ul>
                                    <li><Link to="/news" href="#">News Teste</Link></li>
                                    {/* <li className="dropdown"><Link to="/" href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></Link>
                                        <ul>
                                            <li><Link to="/" href="#">Deep Drop Down 1</Link></li>
                                            <li><Link to="/" href="#">Deep Drop Down 2</Link></li>
                                            <li><Link to="/" href="#">Deep Drop Down 3</Link></li>
                                            <li><Link to="/" href="#">Deep Drop Down 4</Link></li>
                                            <li><Link to="/" href="#">Deep Drop Down 5</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/" href="#">Drop Down 2</Link></li>
                                    <li><Link to="/" href="#">Drop Down 3</Link></li>
                                    <li><Link to="/" href="#">Drop Down 4</Link></li> */}
                                </ul>
                            </li>
                            {/* <li><Link to="/" className="nav-link scrollto" href="#contact">Contact</Link></li> */}
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                </div>
            </header>

            {/* <Navbar light expand="md shadow-sm">
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
                                <Link to="/entretenimento" className="nav-link">Entretenimento</Link>
                            </NavItem> */}
                            {/* <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>Entretenimento</DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem><Link to="/filmes" className="text-decoration-none">Filmes</Link></DropdownItem>
                                    <DropdownItem><Link to="/endereco" className="text-decoration-none">Endereço</Link></DropdownItem>
                                    <DropdownItem><Link to="/Series" className="text-decoration-none">Series</Link></DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown> */}
                            {/* <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>API</DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem><Link to="/news" className="text-decoration-none">News Teste</Link></DropdownItem>
                                </DropdownMenu>

                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar> */}
        </div>
    );
}

export default Example;