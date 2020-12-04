import React from 'react'
import { Switch, Route, } from 'react-router-dom'
import Converdor_de_Moeda from '../tamplates/ConversorMoeda'
import Home from '../tamplates/Home'

export default function app() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/conversor-de-moeda" component={Converdor_de_Moeda} />
        </Switch>
    )
}
