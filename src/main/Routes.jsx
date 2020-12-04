import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/options"><button type="button" class="btn btn-primary">Primary</button></Link>
        </div>
    )
}


function Options() {
    return (
        <div>
            <h1>Options</h1>
            <Link to="/"><button type="button" class="btn btn-primary">Primary</button></Link>

        </div>
    )
}

export default function Header() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/options" component={Options}/>
            </Switch>
        </BrowserRouter>
    )
}
