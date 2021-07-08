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
import Noticias from '../api/Noticias/Noticias'
import Endereco from '../api/Endereco/Endereco'
import News from '../api/News/NewsContext'

// Area de estudo do curso
import Study from '../tamplates/Study'


export default function app() {
    return (
        <Switch>
            {/* Rotas Header */}
            <Route exact path="/" component={Home} />
            <Route exact path="/tools" component={Tools} />
            <Route path="/criacao-de-sites" component={GhostBit} />

            {/* Rotas Tools */}
            <Route path="/tools/convert-box" component={ConvertBox} />
            <Route path="/tools/convert-base" component={ConvertBase} />
            <Route path="/tools/convert-unit" component={ConvertUnit} />
            <Route path="/tools/calculator" component={Calculator} /> 

            {/* Rotas API */}
            <Route path="/noticias" component={Noticias}/>
            <Route path="/endereco" component={Endereco}/>
            <Route path="/News" component={News}/>

            {/* Area de studo do curso */}
            <Route path="/study" component={Study} /> 

            <Redirect from="*" to="/"/> 
            
        </Switch>
    )
}
