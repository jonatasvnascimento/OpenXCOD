// import { useState, setState } from 'react';
// import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import React from 'react';


// const [selectValue, setSelectValue] = useState(1);
const listBase = [
  { id: 1, name: 'Binary' },
  { id: 2, name: 'Hexa' },
  { id: 3, name: 'Octa' },
  { id: 4, name: 'Decimal' },
];
const listConvert = [
  { id: 1, name: 'Binary' },
  { id: 2, name: 'Hexa' },
  { id: 3, name: 'Octa' },
  { id: 4, name: 'Decimal' },

];
export default class ConvertBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Binary',
      valueConvert: 'Binary',
      text: '',
      converted: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectChoice = this.selectChoice.bind(this)
  }

  convertBase(event, valueBase, valueConvert) {
    let baseNum = 0
    let baseNumConvert = 0

    if (valueBase === 'Binary' && valueConvert === 'Binary') {
      baseNum = 2
      baseNumConvert = 2
    }
    else if (valueBase === 'Binary' && valueConvert === 'Hexa') {
      baseNum = 2
      baseNumConvert = 16
    }
    else if (valueBase === 'Binary' && valueConvert === 'Octa') {
      baseNum = 2
      baseNumConvert = 8
    }
    else if (valueBase === 'Binary' && valueConvert === 'Decimal') {
      baseNum = 2
      baseNumConvert = 10
    }

    if (valueBase === 'Hexa' && valueConvert === 'Hexa') {
      baseNum = 16
      baseNumConvert = 16
    }
    else if (valueBase === 'Hexa' && valueConvert === 'Binary') {
      baseNum = 16
      baseNumConvert = 2
    }
    else if (valueBase === 'Hexa' && valueConvert === 'Octa') {
      baseNum = 16
      baseNumConvert = 8
    }
    else if (valueBase === 'Hexa' && valueConvert === 'Decimal') {
      baseNum = 16
      baseNumConvert = 10
    }

    if (valueBase === 'Decimal' && valueConvert === 'Decimal') {
      baseNum = 10
      baseNumConvert = 10
    }
    else if (valueBase === 'Decimal' && valueConvert === 'Hexa') {
      baseNum = 10
      baseNumConvert = 16
    }
    else if (valueBase === 'Decimal' && valueConvert === 'Octa') {
      baseNum = 10
      baseNumConvert = 8
    }
    else if (valueBase === 'Decimal' && valueConvert === 'Binary') {
      baseNum = 10
      baseNumConvert = 2
    }

    if (valueBase === 'Octa' && valueConvert === 'Octa') {
      baseNum = 8
      baseNumConvert = 8
    }
    else if (valueBase === 'Octa' && valueConvert === 'Hexa') {
      baseNum = 8
      baseNumConvert = 16
    }
    else if (valueBase === 'Octa' && valueConvert === 'Binary') {
      baseNum = 8
      baseNumConvert = 2
    }
    else if (valueBase === 'Octa' && valueConvert === 'Decimal') {
      baseNum = 8
      baseNumConvert = 10
    }



    let BinToHex = event.target.value
    let converted = parseInt(BinToHex, baseNum).toString(baseNumConvert).toUpperCase()
    // console.log(valueBase, valueConvert)
    this.setState({ text: event.target.value });
    this.setState({ converted: converted });
  }
  // { id: 1, name: 'Binary' },
  // { id: 2, name: 'Hexa' },
  // { id: 3, name: 'Octa' },
  // { id: 4, name: 'Decimal' },
  // { id: 5, name: 'Text' },
  selectChoice(event) {
    const valueBase = this.state.value
    const valueConvert = this.state.valueConvert
    this.convertBase(event, valueBase, valueConvert)


  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  handleSubmit(event) {
    // console.log(this.state.value);
    event.preventDefault();
  }
  // teste
  render() {
    return (
      <div className="container mb-5 mt-3">
        <Row>
          <Col>
            <div className="container">
              <div className="form-group mt-3">
                <label>Conversor de Base</label>

                <div class="input-group mb-3">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    value={this.value}
                    onChange={(e) => this.setState({ value: e.target.value })}
                  >
                    {listBase.map((item) => (
                      <option key={item.id}>{item.name}</option>
                    ))}
                  </select>
                  <span class="input-group-text">{'to'}</span>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    value={this.valueConvert}
                    onChange={(e) => this.setState({ valueConvert: e.target.value })}
                  >
                    {listConvert.map((item) => (
                      <option key={item.id}>{item.name}</option>
                    ))}
                  </select>
                </div>

              </div>

              <div className="row mt-3">
                <div className="col-sm-4">
                  {/* Codificador */}
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{this.state.value}</h5>
                      <form onChange={this.handleSubmit}>
                        <label>
                          <textarea
                            className="form-control"
                            rows="12"
                            cols="60"
                            value={this.state.text}
                            onChange={this.selectChoice}
                          />
                        </label>
                        {/* <input
                          className="btn btn-primary"
                          type="submit"
                          value="Submit"
                        /> */}
                      </form>
                    </div>
                  </div>


                </div>
                TO
                <div className="col-sm-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{this.state.valueConvert}</h5>
                      <div className="form-group">
                        <form onChange={this.handleSubmit}>
                          <label>
                            <textarea
                              className="form-control"
                              rows="12"
                              cols="60"
                              value={this.state.converted}
                              onChange={this.selectChoice}
                            />
                          </label>

                        </form>
                      </div>
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
}
