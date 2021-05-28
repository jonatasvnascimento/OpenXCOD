import React, { Component } from 'react'
import Api_filmes from './API_filmes'
import './Style/Filmes.css'

class Filmes extends Component {

    state = {
        filmes: [],
    }

    async componentDidMount() {
        const response = await Api_filmes.get('start%20war');
        this.setState({ filmes: response.data });
    }

    render() {
        const { filmes } = this.state
        return (
            <div className="container mt-3 ">
                Lista de filmes
                {filmes.map(f => (
                    <div key={f.show.id} className="card mb-1 style_card">
                        <div className="row g-0">
                            <div className="col-md-3">
                                <img
                                    src={f.show.image.medium}
                                    alt={f.show.nam}
                                    className="ajuste_imagem"
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{f.show.name}</h5>
                                    <p className="card-text">
                                       {f.show.status}</p>
                                    <p className="card-text">
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Filmes