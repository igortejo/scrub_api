import express from 'express'
import bodyParser from 'body-parser'
import produtoController from './controller/produto'

const app = express()
const port = 3000

// faz com que pegue os dados que são passados no body da requisição e transforme em um json
app.use(bodyParser.json())

// é meio que uma rota que chama o controller
app.use('/produto', produtoController)




// faz a chamada para a api
app.listen(port, () => {
  console.log(`App rodando em http://localhost:${port}`)
})