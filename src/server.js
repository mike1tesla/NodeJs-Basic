
// const express = require('express')
import express from "express"
require('dotenv').config()

const app = express()
const port = process.env.PORT
// viewEngine
app.use(express.static('./src/public'))
app.set('view engine', 'ejs');
app.set('views', './src/views');


app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})