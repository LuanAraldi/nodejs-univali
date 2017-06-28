const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const app = express()
app.use(bodyparser.json())

mongoose.connect('mongodb://localhost:url-shortener')

const userRoute = require('./routes/user')

app.use(userRoute)

app.listen(3000, () => {
    console.log('Abriu o servidor na porta 3000')
})
