const express = require('express')
const router = express.Router()

const ctrls = require('../controllers')


router.get('/', ctrls.scripts.index)
router.post('/', ctrls.scripts.create)
router.delete('/:id', ctrls.scripts.destroy)
router.put('/:id', ctrls.scripts.update)

module.exports = router