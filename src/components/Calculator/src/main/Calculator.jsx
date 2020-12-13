import React, { Component } from 'react'
import './Calculator.css'

import Button from '../components/Button'

export default class Calculator extends Component {
    render() {
        return (
            <div className="center">
                <div className="calculator">
                    <Button label={0}/>
                    <Button label={0}/>
                    <Button label={0}/>
                    <Button label={0}/>
                    <Button label={0}/>
                </div>
            </div>

        )
    }
}