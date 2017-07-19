const express = require('express')

const appController = express.Router()

// GOOGLE API KEY [ AIzaSyBmrLdFtp2btB8KXVf66w9AOF-J1IWvOTo ]

appController.get('/', ( req , res ) => {
  // index route
  res.render('default')
})

module.exports = appController
