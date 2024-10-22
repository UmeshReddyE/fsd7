const mongoose = require('mongoose')

db = process.env.DATABASE
mongoose.connect(db).then(() => {
    console.log("Database Connection Succesful")
}).catch((err) => {
    console.log("Database connection failed")
    console.log(`Error: ${err}`)
})