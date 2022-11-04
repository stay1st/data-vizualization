const express = require('express')
const router = express.Router()
const users = require('../models/db.json')

router.get('/', (request, response) => {
    response.render('index')
})

router.get('/users', (request, response) => {
    response.json(users)
})

module.exports = router