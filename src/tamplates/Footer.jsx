import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
    return (
        <div>
            <h1>Footer</h1>
            <Link to="/"><button type="button" class="btn btn-primary">Primary</button></Link>
        </div>
    )
}
