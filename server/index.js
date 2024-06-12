const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("OK")
})

app.post("/", (req, res) => {
    res.send("OK")
})

app.put("/", (req, res) => {
    res.send("OK")
})

app.delete("/", (req, res) => {
    res.send("OK")
})

app.listen(3000, async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/wiezienieag")
        console.log("Dziala na http://localhost:3000")
    }
    catch (err) {
        throw err
    }
    
    
})