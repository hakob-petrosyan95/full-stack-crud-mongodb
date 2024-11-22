const express = require('express')
const router = express.Router();
const { login , register, } = require('../controllers/users')
const { validate } = require('../middlewares/validate')


router.post("/register",validate, register)
router.post("/login", login)

module.exports = router;    