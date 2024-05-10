const mongoose = require('mongoose')
const Schema = mongoose.Schema


// Wir definieren ein subSchema für Fahrgäste und Fahrräder
const carriageSchema = new mongoose.Schema({
    passengerAbs: Number,
    passengerRel: Number,
    bikeAbs: Number,
    bikeRel: Number
}, { _id: false }); // Automatische Erzeugung von _ id deaktivieren



// Wir definieren das Hauptschema
const auslastungSchema = new Schema({
    fzNr: String,
    timeSent: Date,
    ewb: carriageSchema,
    mwd: carriageSchema,
    mwc: carriageSchema,
    ewa: carriageSchema
})

// Wir definieren das Modell
const Auslastung = mongoose.model('Auslastung', auslastungSchema)

module.exports = Auslastung
