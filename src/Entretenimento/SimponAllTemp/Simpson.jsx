import React from 'react'
import Iframe from 'react-iframe'

export default function Simpson() {
    return (
        <div className="container mt-3">
            <Iframe url="https://archive.org/details/carlos_yopmail_Dfds/Episodio+01++O+Pr%C3%AAmio+De+Natal-1.m4v/"
                width="700px"
                height="470px"
                id="myId"
                overflow = "hidden"
                scrolling = "no"
                loading = "eager"
                className="myClassname"
                display="initial"
                position="relative"
                allow="fullscreen" />
        </div>
    )
}