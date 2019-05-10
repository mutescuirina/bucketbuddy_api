const express = require('express')
const adventures = express.Router()

const Adventure = require('../models/adventuresmodels.js')
//...farther down the page

// Index Route
adventures.get('/', (req, res) => {
    Adventure.find({}, (err, foundAdventures) => {
        if (err) {
          res.status(400).json({ error: err.message })
        }
        res.status(200).json(foundAdventures)
      })
  })

  
  
// Create Route

  adventures.post('/', async (req, res) => {
   Adventure.create(req.body, (error, createdAdventure) => {
      if (error) {
        res.status(400).json({ error: error.message })
      }
      res.status(200).send(createdAdventure) //  .json() will send proper headers in response so client knows it's json coming back
    })
  })

  
  module.exports = adventures
  