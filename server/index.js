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

app.listen(3000, () => {
    console.log("Dziala na http://localhost:3000")
})