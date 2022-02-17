// DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')

// CONFIGURATION
require('dotenv').config()

// Routes
const breadsController = require('./controllers/breads_controller.js')
const PORT = process.env.PORT
const app = express()

// VIEW ENGINE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use('/breads', breadsController)

// MIDDLEWARE
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))


// BREAD ROUTES


// app.get('/', (req, res) => {
//   res.send('Welcome to an Awesome App about Breads!')
// })

// Breads
// const breadsController = require('./controllers/breads_controller.js')
// app.use('/breads', breadsController)

// 404 Page
app.get('*', (req, res) => {
  res.send('404')
})

// LISTEN
app.listen(PORT, () => {
  console.log('nomming at port', PORT);
})
