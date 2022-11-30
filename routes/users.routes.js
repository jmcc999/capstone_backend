const express = require('express')

const router = express.Router()

/* == CTRLS == */
const ctrls = require('../controllers')

/* http://localhost:3001/users */

router.post('/register', ctrls.users.register)
router.post('/login', ctrls.users.login)
router.delete('/logout', ctrls.users.logout)


module.exports = router