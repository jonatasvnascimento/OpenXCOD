import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './css/TextConvert.css'

import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

const TextConvert = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div className="container mb-5">
            <Nav tabs>
                <NavItem>
                    <NavLink className={classnames({ active: activeTab === '1' })} onClick={() => { toggle('1'); }}>Converter Texto</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={classnames({ active: activeTab === '2' })} onClick={() => { toggle('2'); }}>Codigo Binario</NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                            <div className="container mt-3 ">
                                <nav className="navbar navbar-expand-lg ">
                                    <div className="collapse navbar-collapse ">
                                        <ul className="navbar-nav ">
                                            <li className="nav-item">
                                                <Link to="#" className="nav-link btn btn-secondary mr-3 mb-3">Tirar maiusculas</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="#" className="nav-link btn btn-secondary mr-3 mb-3">Deixar Promeira Maiscula</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <Col sm="6">
                            <div className="container mt-3">

                            </div>
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </div>
    );
}

export default TextConvert;