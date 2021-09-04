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
        { id: 7, name: 'Hexa to Decimal' },
        { id: 8, name: 'Hexa to Octa' },
        { id: 9, name: 'Hexa to Binary' },
        { id: 10, name: 'Octa to Decimal' },
        { id: 11, name: 'Octa to Hexa' },
        { id: 12, name: 'Octa to Binary' },
        { id: 13, name: 'Texto to Binary' },
        { id: 14, name: 'Texto to Hexa' },
    ]

    function binary_to_hexa(value) {
        console.log(value)
    }
    function binary_to_octa(value) {
        console.log(value)
    }
    function binary_to_decimal(value) {
        console.log(value)
    }
    function decimal_to_hexa(value) {
        console.log(value)
    }
    function binary_to_octa(value) {
        console.log(value)
    }
    function binary_to_octa(value) {
        console.log(value)
    }
    function binary_to_hexa(value) {
        console.log(value)
    }
    function binary_to_octa(value) {
        console.log(value)
    }
    function binary_to_octa(value) {
        console.log(value)
    }
    function binary_to_hexa(value) {
        console.log(value)
    }
    function binary_to_octa(value) {
        console.log(value)
    }
    function binary_to_octa(value) {
        console.log(value)
    }
    function binary_to_octa(value) {
        console.log(value)
    }
    function binary_to_octa(value) {
        console.log(value)
    }

    function escolha(selectEscolha) {
        switch (selectEscolha) {
            case 'Binary to Hexa':
                binary_to_hexa(selectEscolha)
                break;
            case 'Binary to Hexa':
                binary_to_hexa(selectEscolha)
                break;
            case 'Binary to Hexa':
                binary_to_hexa(selectEscolha)
                break;
            case 'Binary to Hexa':
                binary_to_hexa(selectEscolha)
                break;
            case 'Binary to Hexa':
                binary_to_hexa(selectEscolha)
                break;
            case 'Binary to Hexa':
                binary_to_hexa(selectEscolha)
                break;
            case 'Binary to Hexa':
                binary_to_hexa(selectEscolha)
                break;
            case 'Binary to Hexa':
                binary_to_hexa(selectEscolha)
                break;
            case 'Binary to Hexa':
                binary_to_hexa(selectEscolha)
                break;
            case 'Binary to Hexa':
                binary_to_hexa(selectEscolha)
                break;
            case 'Binary to Hexa':
                binary_to_hexa(selectEscolha)
                break;
            case 'Binary to Hexa':
                binary_to_hexa(selectEscolha)
                break;
            case 'Binary to Hexa':
                binary_to_hexa(selectEscolha)
                break;
            case 'Binary to Hexa':
                binary_to_hexa(selectEscolha)
                break;
            default:
                break;
        }
    }



    return (
        <div className="container mb-5 mt-3">
            <Row>
                <Col>
                    <div className="container">
                        <div className="form-group mt-3">
                            <label >Conversor de Base</label>
                            <select className="form-select" aria-label="Default select example" value={selectValue} onChange={e => setSelectValue(e.target.value)}>
                                {list.map((item) => (
                                    <option key={item.id}>{item.name}</option>
                                ))}
                            </select>
                        </div>
                        <ul className="list-group">
                            <button type="button" className="btn btn-secondary mb-2">Morse</button>
                            <button type="button" className="btn btn-secondary mb-2">ASCII</button>

                        </ul>
                        <div className="row mt-3">


                            <div className="col-sm-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Codificador</h5>
                                        <div className="form-group">
                                            <textarea className="form-control" rows="12" cols="20"></textarea>
                                        </div>
                                        <Link to="#" className="btn btn-primary" onClick={escolha(selectValue)}>Codificar</Link>
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