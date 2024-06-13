const mongoose = require("mongoose")

const PrisonerSchema = new mongoose.Schema({
    imie: String,
    nazwisko: String,
    cela: Number
})

const PrisonerModel = mongoose.model("prisoner", PrisonerSchema, "prisoners")

function setupRoutes(app) {
    app.get("/", async (req, res) => {
        let result = await PrisonerModel.find({})
        res.send(result)
    })

    app.get("/:id", async (req, res) => {
        let result = await PrisonerModel.findOne({_id:req.params.id})
        res.send(result)
    })
    
    app.post("/", async (req, res) => {
        let result = await PrisonerModel.create(req.body)
        res.send(result)
    })
    
    app.put("/:id", async (req, res) => {
        let result = await PrisonerModel.updateOne({_id:req.params.id}, req.body)
        res.send(result)
    })
    
    app.delete("/:id", async (req, res) => {
        let result = await PrisonerModel.delete({_id:req.params.id})
        res.send(result)
    })
}

module.exports = setupRoutes