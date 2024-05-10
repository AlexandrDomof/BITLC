const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Wir definieren ein subSchema für Fahrgäste und Fahrräder
const doorsSchema = new mongoose.Schema(
    {
        1: Number,
        2: Number,
        3: Number,
        4: Number,
        5: Number,
        6: Number,
        7: Number,
        8: Number,
        9: Number
    }, { _id: false }); // Automatische Erzeugung von _ id deaktivieren

// Wir definieren das Hauptschema
const zugSchema = new Schema({
    fzNr: String,
    /* time: Date, */
    timeSent: Date,
    doorIn: doorsSchema,
    doorOut: doorsSchema,
    station: String
})

// Wir definieren das Modell
const Zug = mongoose.model('Zug', zugSchema)

module.exports = Zug