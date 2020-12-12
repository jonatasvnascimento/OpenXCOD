import { Row, Col } from 'reactstrap';

export default function Length_ConvertUnit() {
    return (
        <div className="container mb-5 mt-3">
            <Row>
                <Col>
                    <div className="container">
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

                                <select className="config_select" multiple size="11">
                                    <option>metro</option>
                                    <option>decâmetro</option>
                                    <option>hectômetro</option>
                                    <option>quilômetro</option>
                                    <option>megametro</option>
                                    <option>gigametro</option>
                                    <option>terametro</option>
                                    <option>petametro</option>
                                    <option>exametro</option>
                                    <option>zettametro</option>
                                    <option>yottametro</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </Col>
            </Row>
        </div>
    )
}