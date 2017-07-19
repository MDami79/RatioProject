// All our requires/dependencies
const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const User = require('./models/user')

//---------------------NOT SURE IF I'LL USE-------------------------
// Connect to our Mongo database, using Mongoose and include our models
//mongoose.connect('mongodb://MDami79:<PASSWORD>@musicartist-shard-00-00-hirn8.mongodb.net:27017,musicartist-shard-00-01-hirn8.mongodb.net:27017,musicartist-shard-00-02-hirn8.mongodb.net:27017/<DATABASE>?ssl=true&replicaSet=MusicArtist-shard-0&authSource=admin')
// Require our models
//const Post = require('./models/[here]')
//---------------------NOT SURE IF I'LL USE-------------------------
//

//
// Require our "controllers" (i.e. routers)
const routes = require('./routes/loginRoutes')
const appController = require('./routes/index.js')
//const loginRoutes = require('./routes/login.js')

// Creating our Application
const app = express()
mongoose.connect('mongodb://sdamola:Mazuna#79@ds163232.mlab.com:63232/insomnia');
//helper for Logic less
app.engine('handlebars', hbs({
  defaultLayout: 'default',
  helpers: {
    equal: function(lvalue, rvalue, options) {
        if (arguments.length < 3)
            throw new Error("Handlebars Helper equal needs 2 parameters")
        if( lvalue != rvalue ) {
            return options.inverse(this)
        } else {
            return options.fn(this)
        }
    }
  }
}))



// Registering and use our template engine (handlebars)
app.engine('handlebars', hbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieParser())
app.use(require('express-session')({
  secret: 'code mazuna',
  resave: 'false',
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

//app.use('/', routes)

passport.use( new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
//static files
app.use(express.static('public'))

app.use('/', routes)
app.use('/', appController)

app.listen( 3000, () => {

  console.log( 'listening on 3000' )

})
