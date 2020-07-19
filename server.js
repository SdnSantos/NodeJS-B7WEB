const app = require('./app')
const mongoose = require('mongoose')

require('dotenv').config({
  path: 'variables.env'
})

// Configurações de conexão com o Banco de Dados
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
  }
)
// Para o Mongo utilizar ES6, Promise, Async/Await
mongoose.Promise = global.Promise
// Monitorando caso de erro na conexão
mongoose.connection.on('error', (error) => {
  console.log(`Error: ${error.message}`)
})

// Setando a porta
app.set('port', process.env.PORT || 3333)

const server = app.listen(app.get('port'), () => {
  console.log(`Servidor executando na porta ${server.address().port}`)
})