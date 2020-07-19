const express = require('express')
const mustache = require('mustache-express')
const router = require('./routes')
const helpers = require('./helpers')

// Configurações
const app = express()

// Helpers são obrigatórios serem antes das rotas
app.use((req, res, next) => {
  res.locals.h = helpers
  res.locals.teste = '123'
  next()
})

app.use('/', router)

app.use(express.json())

// Especificação do Template Engine
app.engine('mst', mustache(__dirname + '/src/views/partials', '.mst'))
app.set('view engine', 'mst')
app.set('views', __dirname + '/src/views')

module.exports = app
