require('dotenv').config()
require('@prisma/client')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

const { corsOptions } = require('./corsConfig')
const { dbConnect } = require('../prisma/dbConnect')

const todosRoutes = require('./routes/todosRoutes')

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(corsOptions))

app.use('/todos', todosRoutes)

const PORT = process.env.PORT || 4000

app.listen(PORT, (error) => {
  dbConnect()
  if (error) return console.log('err: ', err)
  console.log(`Server listening on ${PORT}`)
})
