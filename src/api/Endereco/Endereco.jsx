import React from 'react'



export default class Endereco extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            endereco: []
        };


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {

        this.setState({ value: event.target.value });

    }

    handleSubmit(event) {

        //   alert('Um nome foi enviado: ' + this.state.value);
        fetch(`https://viacep.com.br/ws/${this.state.value}/json/`)
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                   endereco: data
                })

            })
            .catch((e) => {
                alert('CEP não valido')
            })


        event.preventDefault();
    }

    render() {

        const {endereco} = this.state
        return (
            <div className="container mt-4" >
                <main>
                    <div className="py-5 text-center">
                        <img className="d-block mx-auto mb-4" src="https://icons.iconarchive.com/icons/graphicloads/100-flat-2/256/addressbook-icon.png" alt="" width="72" height="72" />
                        <h2>Localize seu endereço</h2>
                        <p className="lead">Localize seu endereco usando o cep de onde voce mora</p>
                    </div>

                    <div className="row g-5">
                        <div className="col-md-5 col-lg-4 order-md-last">
                            <h4 className="d-flex justify-content-between align-items-center mb-3">
                                <span className="text-primary">Seus Dados</span>
                                <span className="badge bg-primary rounded-pill">10</span>
                            </h4>


                            <ul className="list-group mb-3">
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-0">CEP</h6>
                                        <small className="text-muted">{endereco.cep}</small>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-0">Logradouro</h6>
                                        <small className="text-muted">{endereco.logradouro}</small>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-0">Complemento</h6>
                                        <small className="text-muted">{endereco.complemento}</small>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-0">Bairro</h6>
                                        <small className="text-muted">{endereco.bairro}</small>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-0">Localidade</h6>
                                        <small className="text-muted">{endereco.localidade}</small>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-0">Uf</h6>
                                        <small className="text-muted">{endereco.uf}</small>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-0">Ibge</h6>
                                        <small className="text-muted">{endereco.ibge}</small>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-0">Gia</h6>
                                        <small className="text-muted">{endereco.gia}</small>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-0">Ddd</h6>
                                        <small className="text-muted">{endereco.ddd}</small>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-0">Siafi</h6>
                                        <small className="text-muted">{endereco.siafi}</small>
                                    </div>
                                </li>

                            </ul>


                        </div>

                        <div className="col-md-7 col-lg-8">
                            <h4 className="mb-3">Billing address</h4>

                            <form onSubmit={this.handleSubmit}>
                                <div className="input-group mb-3">
                                    <input className="form-control" placeholder="Insira o CEP" aria-label="Recipient's username" aria-describedby="button-addon2" type="text" value={this.state.value} onChange={this.handleChange} />
                                    <input className="btn btn-outline-secondary" type="submit" value="Enviar" />
                                </div>

                            </form>

                            {/* <form className="needs-validation">
                                <div className="col-12">
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                        <button  type="button" id="button-addon2"><i className="fas fa-search"></i></button>
                                    </div>
                                </div>
                            </form> */}
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}