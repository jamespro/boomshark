require('dotenv').config({path: './config/.env'})
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const methodOverride = require('method-override')
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')
const postRoutes = require('./routes/posts')
const profileRoutes = require('./routes/profile')

// Passport config
require('./config/passport')(passport)

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))
//Use forms for put / delete
app.use(methodOverride('_method'))
// Sessions
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
)

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

app.use('/', mainRoutes)
// app.use('/profile', profileRoutes)
app.use('/post', postRoutes)

// Custom error handling middleware
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FIELD_VALUE') {
      const fieldValue = req.body[err.field] || '' // Get the value of the field that caused the error
      const truncatedValue = fieldValue.substring(0, 200) // Get the first 200 characters

      console.log(`Field value too long for field: ${err.field}`)
      console.log(`Value (truncated to 200 chars): ${truncatedValue}`)

      return res
        .status(400)
        .json({ error: `Field value too long for field: ${err.field}` })
    }
  }
  // Handle other errors
  next(err)
})

app.listen(process.env.PORT, () => {
  console.log('Server is running, you better catch it!')
  console.log(process.env.PORT)
})
