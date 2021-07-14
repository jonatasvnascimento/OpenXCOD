import { Link } from 'react-router-dom'
import { Row, Col } from 'reactstrap';

const ConvertBase = (props) => {
    return (
        <div className="container mb-5 mt-3">
            <Row>
                <Col>
                    <div className="container">
                        <div className="form-group mt-3">
                            <label >Conversor de Base</label>
                            <select className="form-control">
                                <option>Binary to Decinal</option>
                                <option>Binary to Hexa</option>
                                <option>Binary to Octa</option>
                                <option>Decimal to Hexa</option>
                                <option>Decimal to Octa</option>
                                <option>Decimal to Binary</option>
                                <option>Hexa to Decimal</option>
                                <option>Hexa to Octa</option>
                                <option>Hexa to Binary</option>
                                <option>Octa to Decimal</option>
                                <option>Octa to Hexa</option>
                                <option>Octa to Binary</option>
                                <option>Texto to Binary</option>
                                <option>Texto to Hexa   </option>
                            </select>
                        </div>

                        <div className="row mt-3">

                            <ul className="list-group">
                                <button type="button" className="btn btn-secondary mb-2">Morse</button>
                                <button type="button" className="btn btn-secondary mb-2">ASCII</button>

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
                </Col>
            </Row>
        </div>
    );
}

export default ConvertBase;