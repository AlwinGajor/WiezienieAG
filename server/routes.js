const mongoose = require("mongoose")

// Utworzenie schematu Więźnia - jak ma wyglądać struktura danych
const PrisonerSchema = new mongoose.Schema({
    imie: String,
    nazwisko: String,
    cela: Number
})

// Utworzenie modelu, a wraz z nim kolekcji
const PrisonerModel = mongoose.model("prisoner", PrisonerSchema, "prisoners")

// Funkcja do obsługi ścieżek
function setupRoutes(app) {
    // Metoda GET - pobierz dane z bazy danych i przekaż je do klienta
    app.get("/", async (req, res) => {
        let result = await PrisonerModel.find({})
        res.send(result)
    })

    // Metoda GET - pobierz dane jednego więźnia z bazy danych i przekaż je do klienta
    app.get("/:id", async (req, res) => {
        let result = await PrisonerModel.findOne({_id:req.params.id})
        res.send(result)
    })
    
    // Metoda POST - wstaw więźnia do bazy danych
    app.post("/", async (req, res) => {
        let result = await PrisonerModel.create(req.body)
        res.send(result)
    })
    
    // Metoda PUT - zaktualizuj więźnia w bazie danych
    app.put("/:id", async (req, res) => {
        let result = await PrisonerModel.updateOne({_id:req.params.id}, req.body)
        res.send(result)
    })
    
    // Metoda DELETE - usuń więźnia w bazie danych
    app.delete("/:id", async (req, res) => {
        let result = await PrisonerModel.deleteOne({_id:req.params.id})
        res.send(result)
    })
}

module.exports = setupRoutes