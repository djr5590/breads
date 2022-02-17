const express = require('express')
const breads = express.Router()
const Bread = require('../models/breads.js')

// INDEX
breads.get('/', (req, res) => {
    res.render('Index',
        {
            "breads": Bread
        }
    )
  // res.send(Bread)
})

// SHOW
breads.get('/:arrayIndex', (req, res) => {
  if (Bread[req.params.arrayIndex]) {
    res.render('Show', {
      bread:Bread[req.params.arrayIndex],
      index: req.params.arrayIndex,
    })
  } else {
    res.send('404')
  }
})

// DELETE
breads.delete('/:indexArray', (req, res) => {
  Bread.splice(req.params.indexArray, 1)
  res.status(303).redirect('/breads')
})

module.exports = breads