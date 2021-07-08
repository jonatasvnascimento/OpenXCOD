const express = require('express');
const cors = require('cors');
const axios = require('axios')
const app = express()

app.use(cors())

app.get('/', async (req, res) => {

    const { data } = await axios('https://jsonplaceholder.typicode.com/users')

    return res.json(data)
})

const port = process.env.PORT || 3001
app.listen(port)