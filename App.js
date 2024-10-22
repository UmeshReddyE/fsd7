// enviornment
require('dotenv').config()

// express
const express = require('express')
const app = express()
app.use(express.json())

// database
require('./Database/Db')

// controller
const Controller = require('./Controller/Controller')
app.use(Controller)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})