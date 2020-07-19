const express = require('express')

const homeController = require('../src/controllers/homeController')
const userController = require('../src/controllers/userController')

// Rotas
const router = express.Router()

router.get('/', homeController.index)

router.get('/users/login', userController.login)

module.exports = router