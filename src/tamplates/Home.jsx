import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
    return (
        <div className="jumbotron config_back">
            <div className="container">
                <div className="text-center">
                    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column ">
                        <main role="main" className="inner cover">
                            <h1 className="cover-heading">Bem vindo ao OpenXCOD.</h1>
                            <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
                            <p className="lead">
                                <Link href="#" className="btn btn-lg btn-secondary">Learn more</Link>
                            </p>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    )
}