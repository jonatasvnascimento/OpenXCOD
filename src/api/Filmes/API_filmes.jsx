import axios from 'axios'

const Api_filmes = axios.create({
    baseURL: 'http://api.tvmaze.com/search/shows?q=start%20war'
})


export default Api_filmes