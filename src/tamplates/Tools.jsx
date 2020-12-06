import React from 'react'
import './css/Tools.css'
import { Link } from 'react-router-dom'
// import { CardImg } from 'reactstrap'

export default function Tools() {
    return (
        <div className="container">
            <div className="row row-cols-0 row-cols-md-4 justify-content-center">
                <div className="card text-white bg-dark mb-3 tamanho config_card mr-2">
                    <div className="card-header">Conversor de Texto</div>
                    <div className="card-body">
                        <h5 className="card-title">Area de tratamento de texto</h5>
                        <Link to="/text-convert" className="btn btn-primary ">Começar</Link>
                    </div>
                </div>

                <div className="card-deck">
                    <div className="card text-white bg-dark mb-3">
                        {/* <CardImg top width="100%" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22239%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20239%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17639ba1ba1%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A12pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17639ba1ba1%22%3E%3Crect%20width%3D%22239%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2288.75%22%20y%3D%22105.1%22%3E239x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image cap" /> */}
                        <div className="card-body">
                            <div className="card-header">Conversor de Texto</div>
                            <p className="card-text">Deixou acidentalmente o caps lock ativado e digitou algo, mas não se dá ao trabalho de começar de novo e redigitar tudo?</p>
                        </div>
                        <div className="card-footer">
                            <Link to="/text-convert" className="btn btn-primary ">Começar</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}