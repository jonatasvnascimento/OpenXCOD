import axios from 'axios'

const Api_filmes = axios.create({
    baseURL: 'https://api.tvmaze.com/search/shows?q='
})


export default Api_filmes