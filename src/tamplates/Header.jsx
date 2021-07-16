import { Link } from 'react-router-dom'
import React, { useState } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    // Nav,
    // NavItem,
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
                <h1 className="logo"><a href="index.html">OpenXCOD<span>.</span></a></h1>
                <NavbarToggler onClick={toggle} >
                    x
                </NavbarToggler>
                <Collapse isOpen={isOpen} navbar >
                    {/* <NavItem>
                        <Link to="/entretenimento" className="nav-link">Entretenimento</Link>
                    </NavItem> */}
                        <nav id="navbar" className="navbar">
                               <Link to="/" className="nav-link scrollto">Home</Link>
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