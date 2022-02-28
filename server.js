// DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')

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

// MIDDLEWARE
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

// Breads
app.use('/breads', breadsController)

// Bakers
const bakersController = require('./controllers/bakers_controllers.js')
app.use('/bakers', bakersController)

// 404 Page
app.get('*', (req, res) => {
  res.send('404')
})

// Database
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
  // .then(() => console.log('db connected'))
  .catch(e => console.log(e))

// LISTEN
app.listen(PORT, () => {
  console.log('nomming at port', PORT);
})
