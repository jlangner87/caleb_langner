const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3001

const app = express()

//MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(logger('dev'))

//ROUTES

app.listen(PORT, () => {
  console.log(`***SERVER IS ACTIVE ON PORT ${PORT}`)
})
