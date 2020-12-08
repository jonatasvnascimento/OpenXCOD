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
        <div className="container mb-5 mt-3">
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
                                <div className="row">
                                    <div className="col-sm-15 mb-3">
                                        <Link to="/text-convert" className="btn btn-secondary mb-2 mr-2">Primeiro Letra Maiúscula</Link>
                                        <Link to="/text-convert" className="btn btn-secondary mb-2 mr-2">Minúscula</Link>
                                        <Link to="/text-convert" className="btn btn-secondary mb-2 mr-2">Maiúscula</Link>
                                        <Link to="/text-convert" className="btn btn-secondary mb-2 mr-2">Caixa Capitalizada</Link>
                                        <Link to="/text-convert" className="btn btn-secondary mb-2 mr-2">Caso Alternado</Link>
                                        <Link to="/text-convert" className="btn btn-secondary mb-2 mr-2">Caixa de Titulo</Link>
                                        <Link to="/text-convert" className="btn btn-secondary mb-2 mr-2">Caso Inverso</Link>
                                        <Link to="/text-convert" className="btn btn-secondary mb-2 mr-2">Copiar</Link>
                                        <Link to="/text-convert" className="btn btn-secondary mb-2 mr-2">Limpar</Link>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Digite um texto:</label>
                                    <textarea className="form-control" rows="10"></textarea>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <Col>
                            <div className="container">
                                <div className="row mt-3">
                                    <div className="row">
                                        <ul class="list-group list-group-flush">
                                            <Link to="#" className="btn btn-primary mb-1">Codificar</Link>
                                            <Link to="#" className="btn btn-primary mb-1">Codificar</Link>
                                            <Link to="#" className="btn btn-primary mb-1">Codificar</Link>

                                        </ul>
                                        <div className="col-sm-4">
                                            <div className="card">
                                                <div className="card-body">
                                                    <h5 className="card-title">Codificador</h5>
                                                    <div className="form-group">
                                                        <textarea className="form-control" rows="12" cols="60"></textarea>
                                                    </div>
                                                    <Link to="#" className="btn btn-primary">Codificar</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="card">
                                                <div className="card-body">
                                                    <h5 className="card-title">Decodificador</h5>
                                                    <div className="form-group">
                                                        <textarea className="form-control" rows="12" cols="60"></textarea>
                                                    </div>
                                                    <Link to="#" className="btn btn-primary">Decodificar</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </div>
    );
}

export default TextConvert;