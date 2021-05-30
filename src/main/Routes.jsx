import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// Tamplate
import Tools from '../tamplates/Tools'
import Home from '../tamplates/Home'
import GhostBit from '../tamplates/GhostBit'

// Tools
import ConvertBox from '../components/ConvertBox/ConvertBox'
import ConvertBase from '../components/ConvertBase/ConvertBase'
import ConvertUnit from '../components/ConvertUnit/ConvertUnit'
import Calculator from '../components/Calculator/src/main/Calculator'

//API
import Filmes from '../api/Filmes/Filmes'
import Noticias from '../api/Noticias/Noticias'
import Endereco from '../api/Endereco/Endereco'

// Area de estudo do curso
import Study from '../tamplates/Study'




export default function app() {
    return (
        <Switch>
            {/* Rotas Header */}
            <Route exact path="/" component={Home} />
            <Route path="/tools" component={Tools} />
            <Route path="/criacao-de-sites" component={GhostBit} />

            {/* Rotas Tools */}
            <Route path="/convert-box" component={ConvertBox} />
            <Route path="/convert-base" component={ConvertBase} />
            <Route path="/convert-unit" component={ConvertUnit} />
            <Route path="/calculator" component={Calculator} /> 

            {/* Rotas API */}
            <Route path="/filmes" component={Filmes}/>
            <Route path="/noticias" component={Noticias}/>
            <Route path="/endereco" component={Endereco}/>

            {/* Area de studo do curso */}
            <Route path="/study" component={Study} /> 

            <Redirect from="*" to="/"/> 
            
        </Switch>
    )
}
