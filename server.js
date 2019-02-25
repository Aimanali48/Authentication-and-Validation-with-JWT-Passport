const express    = require('express'),
      bodyParser = require('body-parser') ,
      mongoose   = require('mongoose'),
      passport   = require('passport'),
      db         = require('./config/keys').mongoURI,
      app        = express()

const port       = process.env.PORT || 5000

//MONGOOSE CONNECTION 
mongoose.Promise = global.Promise
mongoose.connect(db,{useNewUrlParser:true})
.then(()=>console.log('Mongodb Connected'))
.catch(err=>console.log(err))


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended : true
}))

//PASSPORT MIDDLEWARE
app.use(passport.initialize())
require('./config/passport')(passport)


app.use('/api/users', require('./routes/api/users'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/posts', require('./routes/api/posts'))


app.listen(port, ()=>{console.log(`server started at port ${port}`)})