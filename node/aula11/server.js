
const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path')

// http://facebook.com/profiles/123152?
// campanha=googleads &
// nome_campanha=seila

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('views engine', 'ejs')

app.use(routes)

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000');
})

