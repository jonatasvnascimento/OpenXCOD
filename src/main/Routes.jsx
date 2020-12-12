import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// Tamplate
import Tools from '../tamplates/Tools'
import Home from '../tamplates/Home'
import Noticias from '../tamplates/Noticias'
import GhostBit from '../tamplates/GhostBit'

// Tools
import ConvertBox from '../components/ConvertBox'
import ConvertBase from '../components/ConvertBase'
import ConvertUnit from '../components/ConvertUnit'
import Calculator from '../components/Calculator'

//teste
import Teste from '../components/Teste'

export default function app() {
    return (
        <Switch>
            {/* Rotas Header */}
            <Route exact path="/" component={Home} />
            <Route path="/tools" component={Tools} />
            <Route path="/noticias" component={Noticias} />
            <Route path="/criacao-de-sites" component={GhostBit} />

            {/* Rotas Tools */}
            <Route path="/convert-box" component={ConvertBox} />
            <Route path="/convert-base" component={ConvertBase} />
            <Route path="/convert-unit" component={ConvertUnit} />
            <Route path="/calculator" component={Calculator} />

            {/* Teste tamplate */}
            <Route path="/teste" component={Teste} />

            

            <Redirect from="*" to="/"/> 
            
        </Switch>
    )
}
