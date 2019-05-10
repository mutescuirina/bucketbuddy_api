const express = require('express')
const adventures = express.Router()

const Adventure = require('../models/adventuresmodels.js')
//...farther down the page

//Seed Route
const newAdventure = require('../models/seed.js')
adventures.get('/seed', (req, res) => {
  Adventure.create(newAdventure, (err, seedItems)=> {
       res.send(seedItems)
   })
 })


//Index Route
adventures.get('/', (req, res) => {
    Adventure.find({}, (err, foundAdventures) => {
        if (err) {
          res.status(400).json({ error: err.message })
        }
        res.status(200).json(foundAdventures)
      })
  })
  
//Delete Route
adventures.delete('/:id', (req, res) => {
  Adventure.findByIdAndRemove(req.params.id, (err, deletedAdventure) => {
    if(err) {
      res.status(400).json({error:err.message})
    }
    res.status(200).json(deletedAdventure)
  })

})


//Update Route
adventures.put('/:id', (req, res) => {
  Adventure.findByIdAndUpdate(req.params.id, req.body, {
      new: true
  }, (err, updatedAdventure) => {
      if (err) {
          res.status(400).json({ error: error.message })
      }
      res.status(200).json(updatedAdventure)
  })
})


//Create Route
  adventures.post('/', async (req, res) => {
   Adventure.create(req.body, (error, createdAdventure) => {
      if (error) {
        res.status(400).json({ error: error.message })
      }
      res.status(200).send(createdAdventure) //  .json() will send proper headers in response so client knows it's json coming back
    })
  })

  
  module.exports = adventures
  