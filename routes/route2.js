const express = require("express");
const router2 = express.Router();

// middleware that is specific to this router
router2.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router2.get('/', function (req, res) {
  res.send('Route2 Birds home page')
})
// define the about route
router2.get('/inneruser', function (req, res) {
  res.send('Route2 Inner About birds')
})

module.exports = router2