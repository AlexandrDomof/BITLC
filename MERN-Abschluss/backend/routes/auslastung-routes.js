const express = require('express')
const {
    getAuslastungs,
    getAuslastung,
    delAuslastung,
    postAuslastung,

} = require('../controllers/auslastung-controller')

const router = express.Router();

router.get('/auslastungs', getAuslastungs)
router.get('/auslastungs/:id', getAuslastung)
router.delete('/auslastungs/:id', delAuslastung)
router.post('/auslastungs', postAuslastung)

module.exports = router

