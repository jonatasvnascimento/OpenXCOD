import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Tools from '../tamplates/Tools'
import Home from '../tamplates/Home'
import Noticias from '../tamplates/Noticias'
import Calculator from '../tamplates/Calculator'
import GhostBit from '../tamplates/GhostBit'
import TextConvert from '../tamplates/ConvertForm'

export default function app() {
    return (
        <Switch>
            {/* Rotas Header */}
            <Route exact path="/" component={Home} />
            <Route path="/tools" component={Tools} />
            <Route path="/noticias" component={Noticias} />
            <Route path="/calculator" component={Calculator} />
            <Route path="/criacao-de-sites" component={GhostBit} />

            {/* Rotas Tools */}
            <Route path="/convert-form" component={TextConvert} />



            <Redirect from="*" to="/"/> 
            
        </Switch>
    )
}
