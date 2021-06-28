const express = require("express");
const router1 = express.Router();
const router2 = require("./route2");

// middleware that is specific to this router
router1.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router1.use("/route2", router2)

// define the home page route
router1.get('/', function (req, res) {
  res.send('user Birds home page')
})
// define the about route
router1.get('/inneruser', function (req, res) {
  res.send('user Inner About birds')
})

module.exports = router1