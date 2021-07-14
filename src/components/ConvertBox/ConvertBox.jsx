import React from 'react'
import './css/ConvertBox.css'
export default class ConvertBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.uppercase = this.uppercase.bind(this)
        this.sentenceCase = this.sentenceCase.bind(this)
    }

    handleChange(event) {
        var teste = event.target.value
        this.setState({ value: event.target.value });
    }

    uppercase(event) {
        let value = this.state.value
        this.setState({ value: value.toUpperCase() })
    }
    sentenceCase(event) {
        let value = this.state.value.toLowerCase()
        
        String.prototype.capitalize = function(e) {
            return e.charAt(0).toUpperCase() + this.substr(1);
        }
        this.setState({ value: value.capitalize(value) })
        
    }

    render() {
        return (
            <div className="container mt-3">
                <button className="btn btn-secondary espaco" onClick={this.uppercase}>Minúscula</button>
                <button className="btn btn-secondary espaco" onClick={this.sentenceCase}>Primeiro Letra Maiúscula</button>
                <button className="btn btn-secondary espaco" onClick={this.uppercase}>Maiúscula</button>
                <button className="btn btn-secondary espaco" onClick={this.uppercase}>Caixa Capitalizada</button>
                <button className="btn btn-secondary espaco" onClick={this.uppercase}>Caso Alternado</button>
                <button className="btn btn-secondary espaco" onClick={this.uppercase}>Caixa de Titulo</button>
                <button className="btn btn-secondary espaco" onClick={this.uppercase}>Caso Inverso</button>
                <button className="btn btn-secondary espaco" onClick={this.uppercase}>Varselete</button>
                <button className="btn btn-secondary espaco" onClick={this.uppercase}>Sobrecritp</button>
                <button className="btn btn-secondary espaco" onClick={this.uppercase}>Texto taxado</button>
                <button className="btn btn-secondary espaco" onClick={this.uppercase}>Texto Reverso</button>
                <button className="btn btn-secondary espaco" onClick={this.uppercase}>Texto Invertido</button>
                <button className="btn btn-secondary espaco" onClick={this.uppercase}>Negrito</button>
                <button className="btn btn-secondary espaco" onClick={this.uppercase}>Copiar</button>
                <button className="btn btn-secondary espaco" onClick={this.uppercase}>Limpar</button>
                <form claaa className="mt-3">
                    <textarea className="form-control" rows="10" value={this.state.value} onChange={this.handleChange} />
                    {/* <input type="submit" value="Submit" /> */}
                </form>
            </div>

        );
    }
}