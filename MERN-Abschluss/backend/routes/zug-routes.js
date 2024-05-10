const express = require('express')
const {
    getZugs,
    getZug,
    delZug,
    postZug,

} = require('../controllers/zug-controller')

const router = express.Router();

router.get('/zugs', getZugs)
router.get('/zugs/:id', getZug)
router.delete('/zugs/:id', delZug)
router.post('/zugs', postZug)

module.exports = router