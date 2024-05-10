const express = require('express')
const {
    getLinie,
    /*
        delLinie,
        postLinie, */

} = require('../controllers/linie-controller')

const router = express.Router();

router.get('/linie', getLinie)
/* 
router.post('/linie', postLinie) */

module.exports = router