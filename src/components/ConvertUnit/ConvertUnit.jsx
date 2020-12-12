import React from 'react'
import '../css/ConvertUnit.css'
import LenghtUnit from './Length_ConvertUnit'
import { Link } from 'react-router-dom'
import { Row, Col } from 'reactstrap';

const ConvertUnit = (props) => {
    return (
        <div className="container mb-5 mt-3">
            <Row>
                <Col>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-15 mb-3">
                                <Link to="/teste" className="btn btn-secondary mb-2 mr-2">Comprimento</Link>
                                <Link to="#" className="btn btn-secondary mb-2 mr-2">Minúscula</Link>
                                <Link to="#" className="btn btn-secondary mb-2 mr-2">Maiúscula</Link>
                            </div>
                        </div>
                        <LenghtUnit/>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default ConvertUnit;