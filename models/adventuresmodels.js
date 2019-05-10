const mongoose = require('mongoose')

const adventureSchema = mongoose.Schema({
  title: {type: String, required: true},
  img: {type: String, default: 'http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png'},
  notes: {type: String},
  completed: {type: Boolean, default: false},
  
})

module.exports = mongoose.model('Adventure', adventureSchema)