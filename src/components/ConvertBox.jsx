import { Link } from 'react-router-dom'


import { Row, Col } from 'reactstrap';

const ConvertBox = (props) => {
    return (
        <div className="container mb-5 mt-3">
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
                                <Link to="/text-convert" className="btn btn-secondary mb-2 mr-2">Varselete</Link>
                                <Link to="/text-convert" className="btn btn-secondary mb-2 mr-2">Sobrecritp</Link>
                                <Link to="/text-convert" className="btn btn-secondary mb-2 mr-2">Texto taxado</Link>
                                <Link to="/text-convert" className="btn btn-secondary mb-2 mr-2">Texto Reverso</Link>
                                <Link to="/text-convert" className="btn btn-secondary mb-2 mr-2">Texto Invertido</Link>
                                <Link to="/text-convert" className="btn btn-secondary mb-2 mr-2">Negrito</Link>
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
        </div>
    );
}

export default ConvertBox;