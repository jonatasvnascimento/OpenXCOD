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

//Entretenimento
import Entretenimento from '../Entretenimento/Tamplate/Entretenimento'
import Simpson from '../Entretenimento/SimponAllTemp/Simpson'
import simpson1temp from '../Entretenimento/SimponAllTemp/Temp/simpson1temp'
import simpson2temp from '../Entretenimento/SimponAllTemp/Temp/simpson2temp'
import simpson3temp from '../Entretenimento/SimponAllTemp/Temp/simpson3temp'
import simpson4temp from '../Entretenimento/SimponAllTemp/Temp/simpson4temp'
import simpson5temp from '../Entretenimento/SimponAllTemp/Temp/simpson5temp'
import simpson6temp from '../Entretenimento/SimponAllTemp/Temp/simpson6temp'
import simpson7temp from '../Entretenimento/SimponAllTemp/Temp/simpson7temp'
import simpson8temp from '../Entretenimento/SimponAllTemp/Temp/simpson8temp'
import simpson9temp from '../Entretenimento/SimponAllTemp/Temp/simpson9temp'
import simpson10temp from '../Entretenimento/SimponAllTemp/Temp/simpson10temp'
import simpson11temp from '../Entretenimento/SimponAllTemp/Temp/simpson11temp'
import simpson12temp from '../Entretenimento/SimponAllTemp/Temp/simpson12temp'
import simpson13temp from '../Entretenimento/SimponAllTemp/Temp/simpson13temp'
import simpson14temp from '../Entretenimento/SimponAllTemp/Temp/simpson14temp'
import simpson15temp from '../Entretenimento/SimponAllTemp/Temp/simpson15temp'
import simpson16temp from '../Entretenimento/SimponAllTemp/Temp/simpson16temp'
import simpson17temp from '../Entretenimento/SimponAllTemp/Temp/simpson17temp'
import simpson18temp from '../Entretenimento/SimponAllTemp/Temp/simpson18temp'
import simpson19temp from '../Entretenimento/SimponAllTemp/Temp/simpson19temp'
import simpson20temp from '../Entretenimento/SimponAllTemp/Temp/simpson20temp'
import simpson21temp from '../Entretenimento/SimponAllTemp/Temp/simpson21temp'
import simpson22temp from '../Entretenimento/SimponAllTemp/Temp/simpson22temp'
import simpson23temp from '../Entretenimento/SimponAllTemp/Temp/simpson23temp'
import simpson24temp from '../Entretenimento/SimponAllTemp/Temp/simpson24temp'
import simpson25temp from '../Entretenimento/SimponAllTemp/Temp/simpson25temp'
import simpson26temp from '../Entretenimento/SimponAllTemp/Temp/simpson26temp'
import simpson27temp from '../Entretenimento/SimponAllTemp/Temp/simpson27temp'
import simpson28temp from '../Entretenimento/SimponAllTemp/Temp/simpson28temp'
import simpson29temp from '../Entretenimento/SimponAllTemp/Temp/simpson29temp'
import simpson30temp from '../Entretenimento/SimponAllTemp/Temp/simpson30temp'
import simpson31temp from '../Entretenimento/SimponAllTemp/Temp/simpson31temp'
import simpson32temp from '../Entretenimento/SimponAllTemp/Temp/simpson32temp'


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

            {/* Rotas Entretenimento */}
            <Route path="/entretenimento" component={Entretenimento}/>
            <Route path="/simpsons-all-temp" component={Simpson}/>
            <Route path="/simpsons-1-temp" component={simpson1temp}/>
            <Route path="/simpsons-2-temp" component={simpson2temp}/>
            <Route path="/simpsons-3-temp" component={simpson3temp}/>
            <Route path="/simpsons-4-temp" component={simpson4temp}/>
            <Route path="/simpsons-5-temp" component={simpson5temp}/>
            <Route path="/simpsons-6-temp" component={simpson6temp}/>
            <Route path="/simpsons-7-temp" component={simpson7temp}/>
            <Route path="/simpsons-8-temp" component={simpson8temp}/>
            <Route path="/simpsons-9-temp" component={simpson9temp}/>
            <Route path="/simpsons-10-temp" component={simpson10temp}/>
            <Route path="/simpsons-11-temp" component={simpson11temp}/>
            <Route path="/simpsons-12-temp" component={simpson12temp}/>
            <Route path="/simpsons-13-temp" component={simpson13temp}/>
            <Route path="/simpsons-14-temp" component={simpson14temp}/>
            <Route path="/simpsons-15-temp" component={simpson15temp}/>
            <Route path="/simpsons-16-temp" component={simpson16temp}/>
            <Route path="/simpsons-17-temp" component={simpson17temp}/>
            <Route path="/simpsons-18-temp" component={simpson18temp}/>
            <Route path="/simpsons-19-temp" component={simpson19temp}/>
            <Route path="/simpsons-20-temp" component={simpson20temp}/>
            <Route path="/simpsons-21-temp" component={simpson21temp}/>
            <Route path="/simpsons-22-temp" component={simpson22temp}/>
            <Route path="/simpsons-23-temp" component={simpson23temp}/>
            <Route path="/simpsons-24-temp" component={simpson24temp}/>
            <Route path="/simpsons-25-temp" component={simpson25temp}/>
            <Route path="/simpsons-26-temp" component={simpson26temp}/>
            <Route path="/simpsons-27-temp" component={simpson27temp}/>
            <Route path="/simpsons-28-temp" component={simpson28temp}/>
            <Route path="/simpsons-29-temp" component={simpson29temp}/>
            <Route path="/simpsons-30-temp" component={simpson30temp}/>
            <Route path="/simpsons-31-temp" component={simpson31temp}/>
            <Route path="/simpsons-32-temp" component={simpson32temp}/>

            {/* Area de studo do curso */}
            <Route path="/study" component={Study} /> 

            <Redirect from="*" to="/"/> 
            
        </Switch>
    )
}
