import React from 'react'
import Iframe from 'react-iframe'
// import { Link } from 'react-router-dom'

export default function IframeSimpson(props) {
    return (
        <div className="mt-3">
            <Iframe url={props.url}
                width="350px"
                height="450px"
                id="myId"
                scrolling="no"
                loading="eager"
                allow="fullscreen" ></Iframe>
        </div>
    )
}