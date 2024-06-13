const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const setupRoutes = require("./routes")

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

setupRoutes(app)

app.listen(3000, async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/wiezienieag")
        console.log("Dziala na http://localhost:3000")
    }
    catch (err) {
        throw err
    }
    
    
})