require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
// const connectionString = "mongodb+srv://JefAdim:********@cluster0.fx4tfdl.mongodb.net/"
mongoose.connect(process.env.CONNECTIONSTRING)
.then(()=> {
  app.emit('pronto')
})
.catch(e => {
  console.log(e);
})

const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('connect-flash')

const routes = require('./routes')
const path = require('path')
const {middlewareGlobal} = require('./src/middlewares/middleware.js')

// http://facebook.com/profiles/123152?
// campanha=googleads &
// nome_campanha=seila

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.static(path.resolve(__dirname, 'public')))

const sessionOptions = session({
  secret: 'kflrs238klsadf()',
  // store: new MongoStore({ mongooseConnection: mongoose.connection }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  },
  store: MongoStore.create({mongoUrl: process.env.CONNECTIONSTRING})
})
app.use(sessionOptions)

app.use(flash())

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('views engine', 'ejs')

// Nossos próprios middlewares
app.use(middlewareGlobal)

app.use(routes)

app.on('pronto', ()=> {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  })
})



