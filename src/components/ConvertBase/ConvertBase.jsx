// import { useState, setState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import React from 'react';

// const [selectValue, setSelectValue] = useState(1);
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
];
export default class ConvertBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Binary to Hexa',
      text: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  binary_to_hexa(value_bth) {
    console.log(value_bth);
  }
  binary_to_octa(value) {
    console.log(value);
  }

  escolha(value_escolha) {
    switch (value_escolha) {
      case 'Binary to Hexa':
        this.binary_to_hexa(value_escolha);
        break;
      default:
        break;
    }
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state.value);
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
                <select
                  className="form-select"
                  aria-label="Default select example"
                  value={this.value}
                  onChange={(e) => this.setState({ value: e.target.value })}
                >
                  {list.map((item) => (
                    <option key={item.id}>{item.name}</option>
                  ))}
                </select>
              </div>
              <ul className="list-group">
                <button type="button" className="btn btn-secondary mb-2">
                  Morses
                </button>
                <button type="button" className="btn btn-secondary mb-2">
                  ASCII
                </button>
              </ul>
              <div className="row mt-3">
                <div className="col-sm-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Codificador</h5>
                      <form onChange={this.handleSubmit}>
                        <label>
                          <textarea
                            className="form-control"
                            rows="12"
                            cols="60"
                            onChange={this.handleChange}
                          />
                        </label>
                        <input
                          className="btn btn-primary"
                          type="submit"
                          value="Submit"
                        />
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Decodificador</h5>
                      <div className="form-group">
                        <form onChange={this.handleSubmit}>
                          <label>
                            <textarea
                              className="form-control"
                              rows="12"
                              cols="60"
                              data={this.state.text}
                            />
                          </label>
                          <input
                            className="btn btn-primary"
                            type="submit"
                            value="Submit"
                          />
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
