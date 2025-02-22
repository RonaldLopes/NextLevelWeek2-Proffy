import express from 'express'
import routes from './routes'
import cors from 'cors'
const app = express()

app.use(cors())
app.use(express.json())


// GET: Buscar ou listar uma informação
// POST: Criar uma nova informação
// PUT: Atualizar uma informação existente
//DELETE: Deletar uma informação


//Corpo (Request Body): Dados para criação ou atualização de um registro
//Route Params: Identificar qual recurso eu quero atualizar ou deletar (request.params)
//Query Params: Paginação, Filtros, ordenação (request.query)

app.use(routes)



app.listen(3333)