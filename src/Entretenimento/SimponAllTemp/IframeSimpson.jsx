import React from 'react'
import Iframe from 'react-iframe'
// import { Link } from 'react-router-dom'

export default function IframeSimpson(props) {
    return (
        <div className="container mt-3">
            <Iframe url={props.url}
                width="700px"
                height="470px"
                id="myId"
                overflow="hidden"
                scrolling="no"
                loading="eager"
                className="myClassname"
                display="initial"
                position="relative"
                allow="fullscreen" ></Iframe>
        </div>
    )
}