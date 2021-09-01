import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Row, Col } from 'reactstrap';

const ConvertBase = (props) => {

    const [selectValue, setSelectValue] = useState(1);
    const list = [
        { id: 1, name: 'Binary to Hexa' },
        { id: 2, name: 'Binary to Octa' },
        { id: 3, name: 'Binary to Decimal' },
        { id: 4, name: 'Decimal to Hexa' },
        { id: 5, name: 'Decimal to Binary' },
        { id: 6, name: 'Decimal to Decimal' },
        { id: 7, name: 'Binary to Hexa' },
        { id: 8, name: 'Binary to Octa' },
        { id: 9, name: 'Decimal to Hexa' },
        { id: 10, name: 'Binary to Hexa' },
        { id: 11, name: 'Binary to Octa' },
        { id: 12, name: 'Decimal to Hexa' },
        { id: 13, name: 'Binary to Hexa' },
        { id: 14, name: 'Binary to Octa' },
    ]
    // <option></option>
    // <option>Hexa to Decimal</option>
    // <option>Hexa to Octa</option>
    // <option>Hexa to Binary</option>
    // <option>Octa to Decimal</option>
    // <option>Octa to Hexa</option>
    // <option>Octa to Binary</option>
    // <option>Texto to Binary</option>
    // <option>Texto to Hexa   </option>

    return (
        <div className="container mb-5 mt-3">
            <Row>
                <Col>
                    <div className="container">
                        <div className="form-group mt-3">
                            <label >Conversor de Base</label>
                            <select className="form-control" value={selectValue} onChange={e => setSelectValue(e.target.value)}>

                                {list.map((item) => (
                                    <option key={item.id}>{item.name}</option>
                                ))}


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