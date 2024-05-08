const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')
// Vai ver qual a rota e chamar o controlador e esse controlador vai decidir qual view e qual model vai utilizar.


// Rotas da home
route.get('/', homeController.paginaInicial)
route.post('/', homeController.trataPost)

// Rotas de contato

route.get('/contato', contatoController.paginaInicial)


module.exports = route