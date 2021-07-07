import axios from 'axios'
import React, { useEffect, useState, createContext } from 'react'

export const NewsContext = createContext()

export const NewsContextProvider = (props) => {

    const [data, setData] = useState()
    const apiKey = "face7930b095459aa19fa97cfd26b6ca"
    const research = "brasil"
    // https://newsapi.org/v2/everything?q=tesla&from=2021-05-08&sortBy=publishedAt&apiKey=face7930b095459aa19fa97cfd26b6ca

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/everything?q=${research}&from=2021-06-09&to=2021-06-09&sortBy=popularity&apiKey=${apiKey}`)
            .then(response => {
                setData(response.data)
            }).catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div>
            <NewsContext.Provider value={{ data }}>
                {props.children}
            </NewsContext.Provider>
        </div>
    )
}

