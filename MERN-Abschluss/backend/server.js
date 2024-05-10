
const express = require('express')
const mongoose = require('mongoose')

const axios = require('axios');
const cors = require('cors')

const Auslastung = require('./models/auslastung')
const Zug = require('./models/zug')

const auslastungRoutes = require('./routes/auslastung-routes')
const zugRoutes = require('./routes/zug-routes')
const linieRoutes = require('./routes/linie-routes')
const stationRoutes = require('./routes/station-routes')

const PORT = 3001
/* const URL = 'mongodb://localhost:27017/RhB' */

const URL = "mongodb+srv://LOG:PSW@cluster0.sh9omrc.mongodb.net/RhB?retryWrites=true&w=majority"

const app = express()

process.env.TZ = 'Europe/Berlin';

app.use(express.json())

app.use(cors()); //CORS Sicherheit Politik Datenübertragen zw. PORT 3000 und 3001
app.use(auslastungRoutes)
app.use(zugRoutes)
app.use(linieRoutes)
app.use(stationRoutes)


mongoose
    .connect(URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(`DB connection ERROR: {$err}`))


app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`Listening port ${PORT}`)
})








