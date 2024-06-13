// Zaciągnięcie modułów/bibliotek
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const setupRoutes = require("./routes")

// Utworzenie serwera Express
const app = express()

// Middleware do dopuszczania żądań z innych domen
app.use(cors())

// Middleware do zmiany danych na JSON
app.use(express.json())

// Funkcja, znajduje sie w routes.js
setupRoutes(app)

// Serwer nasłuchuje na porcie 3000
app.listen(3000, async () => {
    try {
        // Polaczenie z bazą danych Mongo
        await mongoose.connect("mongodb://127.0.0.1:27017/wiezienieag")
        console.log("Dziala na http://localhost:3000")
    }
    catch (err) {
        throw err
    }
})