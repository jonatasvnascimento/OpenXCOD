import React, { Component } from 'react'
import './Style/Filmes.css'

export default class Filmes extends Component {

    constructor(props) {
        super(props)
        this.state = {
            filmes: [],
            value: '',
        }



        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });

    }

    handleSubmit(event) {
        let value = this.state.value

        fetch(`https://api.tvmaze.com/search/shows?q=${value}`)
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    filmes: data
                })
            })
            .catch((e) => {
                console.log(`Quebra: ${e}`)
            })
        event.preventDefault();
    }


    // async componentDidMount() {
    //     const response = await Api_filmes.get('star wars',);
    //     this.setState({ filmes: response.data });

    // }

    render() {
        const { filmes } = this.state
       
        return (
            <div className="container mt-3 ">

                <form onSubmit={this.handleSubmit}>
                    <div className="input-group mb-3">
                        <input className="form-control" placeholder="Buscar filmes" aria-label="Recipient's username" aria-describedby="button-addon2" type="text" value={this.state.value} onChange={this.handleChange} />
                        <input className="btn btn-outline-secondary" type="submit" value="Enviar" />
                    </div>
                </form>

                <h5 className="mt-3 mb-3">Lista de Filmes</h5>
                {filmes.map(f => (
                    <div key={f.show.id} className="card mb-1 style_card">
                        <div className="row g-0">
                            <div className="col-md-3">
                                <img
                                    src={f.show.image.medium}
                                    alt={f.show.name}
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

