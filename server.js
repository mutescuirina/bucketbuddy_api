const express = require('express');
const app = express ();
const PORT = process.env.PORT || 3003;
const mongoose = require('mongoose')
const MONGODB_URI =  process.env.MONGODB_URI || 'mongodb://localhost:27017'+ '/adventures'

// middleware
app.use(express.json()); //use .json(), not .urlencoded()

// Error / Disconnection
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))

//...farther down the page

mongoose.connect('mongodb://localhost:27017/adventures', { useNewUrlParser: true })
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose...')
})

app.get('/' , (req, res) => {
    res.send ('hello world');
  });

  // Controllers/Routes
  const cors = require('cors')
  app.use(cors())

const adventuresController = require('./controllers/adventures.js')
app.use('/adventures', adventuresController)


app.listen(PORT, () =>{ 
console.log('bucketbuddy listen on ', PORT)})