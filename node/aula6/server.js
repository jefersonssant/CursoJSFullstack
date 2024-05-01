// express ajuda-nos a trabalhar nas rotas da aplicação

//                   CRIAR, LER, ATUALIZAR, APAGAR
// operações CRUD -> CREAT, READ, UPDATA, DELETE
//                   POST,  GET,  PUT,    DELETE
// http://meusite.com/ <- GET -> entregue a página

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Nome: <input type="text" name="nome">
  <button>Enviar</button>
  </form>
  `)
})

app.post('/', (req, res) => {
  res.send('Recebi o formulário')
})

app.get('/contato', (req, res) => {
  res.send('Obrigado por entrar em contato com a gente')
})

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000');
})

