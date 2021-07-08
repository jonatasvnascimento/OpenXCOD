import React from 'react'
//import { Link } from 'react-router-dom'

function NewsArticle({ data }) {
    return (
        <div className="container mt-3">
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <span>{data.author}</span>
            <span>{data.publishedAt}</span>
            <span>{data.source.name}</span>
        

        </div>
    )
}

export default NewsArticle
