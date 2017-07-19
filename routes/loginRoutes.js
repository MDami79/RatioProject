const express = require('express')
const passport = require('passport')

const User = require('../models/user')

//Create a router for handling our app as
//well as our sign up
const router = express.Router()

router.get('/', function(req, res){

  res.render('default', { user: req.user })

})

router.get('/index', function(req, res){

  res.render('index', { user: req.user })

})
//Sign
router.get('/signup', function(req, res){

    res.render('signup')

}).post('/signup', function(req, res){

  let newUser = new User({username:req.body.username})
  User.register( newUser, req.body.password, function(err, user){
    if (err) {
      return res.render('register', {account:user})
    }

    passport.authenticate('local')(req, res, function(){
      res.redirect('/')
    })
  })
})

router.get('/login', function(req,res){

  res.render('login', {user: req.user})

}).post('/login',
  passport.authenticate('local'),
  function(req, res){
    res.redirect('../index')
  }
)

router.get('/logout', function(req, res){
    req.logout()
    res.redirect('/')
})

module.exports = router
