const express = require('express')
const {
    getStation
} = require('../controllers/station-controller')

const router = express.Router();

router.get('/station', getStation)

module.exports = router