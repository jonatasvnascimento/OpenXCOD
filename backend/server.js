const express = require('express');
const cors = require('cors');
const app = express()

app.use(cors())

app.get('/', (req, res) => {
    return res.json([
        {name: "Jeff"},
        {name: "Antony"},
        {name: "Marry"},
        {name: "Artur"},
    ])
})

const port = process.env.PORT || 3001
app.listen(port)