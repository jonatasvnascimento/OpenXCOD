import { Link } from 'react-router-dom'
import './css/ConvertUnit.css'
import Comprimento from './Comprimento'


import { Row, Col } from 'reactstrap';

const ConvertUnit = (props) => {
    return (
        <div className="container mb-5 mt-3">
            <Row>
                <Col>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-15 mb-3">
                                <Link to="#" className="btn btn-secondary mb-2 mr-2">Comprimento</Link>
                                <Link to="#" className="btn btn-secondary mb-2 mr-2">Minúscula</Link>
                                <Link to="#" className="btn btn-secondary mb-2 mr-2">Maiúscula</Link>
                            </div>
                        </div>
                        <form>
                            <div className="form-row">

                                <div className="form-group col-md-3">
                                    <label>De</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group col-md-3">
                                    <label>Para</label>
                                    <input type="text" className="form-control" />
                                </div>


                            </div>
                        </form>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default ConvertUnit;