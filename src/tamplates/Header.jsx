import { Link } from 'react-router-dom'
import React, { useState } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    // Nav,
    NavItem,
    // UncontrolledDropdown,
    // DropdownToggle,
    // DropdownMenu,
    // DropdownItem,
} from 'reactstrap';

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar id="header" className="d-flex align-items-center">
            <div className="container d-flex align-items-center justify-content-between">
                <h1 className="logo"><Link to="/" >Open<span>XCOD</span></Link></h1>


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


                </nav>

                <NavbarToggler onClick={toggle} >
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </NavbarToggler>
                <Collapse isOpen={isOpen} navbar >
                    {/* <NavItem>
                        <Link to="/entretenimento" className="nav-link">Entretenimento</Link>
                    </NavItem> */}
                    <nav id="navbar" className="navbar">
                        <Link to="/" className="nav-link scrollto">Home</Link>
                    </nav>
                    <nav id="navbar" className="navbar">
                        <Link to="/noticias" className="nav-link scrollto">Noticias</Link>
                    </nav>
                    <nav id="navbar" className="navbar">
                        <Link to="/tools" className="nav-link scrollto">Ferramentas</Link>
                    </nav>
                    <nav id="navbar" className="navbar">
                        <Link to="/" className="nav-link scrollto">Portfolio</Link>
                    </nav>
                    <nav id="navbar" className="navbar">
                        <Link to="/" className="nav-link scrollto">Entretenimento</Link>
                    </nav>
                   
                    {/* <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>Entretenimento</DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem><Link to="/Series" className="text-decoration-none">Series</Link></DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown> */}
                    {/* <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>API</DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem><Link to="/news" className="text-decoration-none">News Teste</Link></DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown> */}
                </Collapse>
            </div>
        </Navbar>
    )

}

export default Example;