import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Conversor from '../tamplates/Conversor'
import Home from '../tamplates/Home'
import Noticias from '../tamplates/Noticias'
import Calculadora from '../tamplates/Calculadora'
import GhostBit from '../tamplates/GhostBit'

export default function app() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/conversor" component={Conversor} />
            <Route path="/noticias" component={Noticias} />
            <Route path="/conversor" component={Conversor} />
            <Route path="/calculadora" component={Calculadora} />
            <Route path="/criacao-de-sites" component={GhostBit} />
            <Redirect from="*" to="/"/> 
            
        </Switch>
    )
}
