import React from 'react'
import {NewsContextProvider} from '../Noticias/NewsContext'
import News from '../Noticias/News'
import '../Noticias/css/Noticias.css'

const Noticias = ({data}) => {
    return (
        <div>
            <NewsContextProvider>
                <News/>
            </NewsContextProvider>
        </div>
    )
}

export default Noticias