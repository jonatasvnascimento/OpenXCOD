import React, { useContext } from 'react'
import { NewsContext } from '../Noticias/NewsContext'
import NewsArticle from './NewsArticle'

function News(props) {
    const { data } = useContext(NewsContext)
    return (
        <div className="container mt-3">
            {data ? data.articles.map(news => 
                <NewsArticle data={news} key={news.url}/>
            ): "Loading"}
        </div>
    )
}

export default News