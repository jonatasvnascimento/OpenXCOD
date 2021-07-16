import React from 'react'
import './css/ConvertBox.css'
export default class ConvertBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            copy: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.uppercase = this.uppercase.bind(this)
        this.sentenceCase = this.sentenceCase.bind(this)
        this.clean = this.clean.bind(this)
        this.copy = this.copy.bind(this)
        this.capitalizeFistWord = this.capitalizeFistWord.bind(this)
        this.alternatingCase = this.alternatingCase.bind(this)
        this.invertCase = this.invertCase.bind(this)
        this.supScript = this.supScript.bind(this)
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    uppercase(event) {
        let value = this.state.value
        this.setState({ value: value.toUpperCase() })
    }
    sentenceCase() {
        let value = this.state.value.toLowerCase()

        // eslint-disable-next-line no-extend-native
        String.prototype.capitalize = function (e) {
            return e.charAt(0).toUpperCase() + this.substr(1);
        }
        this.setState({ value: value.capitalize(value) })


    }
    clean() {
        let event = this.state.value
        event = ""
        this.setState({ value: event })
        this.setState({ copy: false })

    }
    copy() {
        this.setState({ copy: true })
        navigator.clipboard.writeText(this.state.value)
    }
    capitalizeFistWord() {
        function titleCase(str) {
            return str.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
        }
        let str = titleCase(this.state.value)
        this.setState({ value: str })
    }
    alternatingCase() {
        let event = this.state.value
        let finalEvent = event.split('').reverse().join('')
        this.setState({value: finalEvent})
    }

    invertCase() {
        let value = this.state.value.toUpperCase()

        // eslint-disable-next-line no-extend-native
        String.prototype.capitalize = function (e) {
            return e.charAt(0).toLowerCase() + this.substr(1);
        }
        this.setState({ value: value.capitalize(value) })
    }

    supScript() {
        let value = this.state.value
    }

    render() {
        return (
            <div className="container mt-3">
                <button className="btn btn-secondary espaco" onClick={this.uppercase}>Minúscula</button>
                <button className="btn btn-secondary espaco" onClick={this.sentenceCase}>Primeiro Letra Maiúscula</button>
                <button className="btn btn-secondary espaco" onClick={this.capitalizeFistWord}>Caixa Capitalizada</button>
                <button className="btn btn-secondary espaco" onClick={this.alternatingCase}>Caso Alternado</button>
                <button className="btn btn-secondary espaco" onClick={this.capitalizeFistWord}>Caixa de Titulo</button>
                <button className="btn btn-secondary espaco" onClick={this.invertCase}>Caso Inverso</button>
                <button className="btn btn-secondary espaco" onClick={this.supScript}>Sobrescrito</button>
                <button className="btn btn-secondary espaco" onClick={this.uppercase}>Texto taxado</button>
                <button className="btn btn-secondary espaco" onClick={this.uppercase}>Texto Reverso</button>
                <button className="btn btn-secondary espaco" onClick={this.uppercase}>Texto Invertido</button>
                <button className="btn btn-secondary espaco" onClick={this.uppercase}>Negrito</button>

                <form className="mt-3">
                    <textarea className="form-control" rows="10" value={this.state.value} onChange={this.handleChange} />
                    {/* <input type="submit" value="Submit" /> */}

                </form>
                <button className="btn btn-dark espaco" onClick={this.copy}>Copiar</button>
                <button className="btn btn-danger espaco" onClick={this.clean}>Limpar</button>
                {this.state.copy ? <span style={{ color: 'red' }}>Copied</span> : null}
            </div>

        );
    }
}