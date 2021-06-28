const express = require("express");
const router = express.Router();
const rout1 = require("./routes/route1");

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
router.use('/users', rout1);
// define the home page route
router.get('/', function (req, res) {
  res.send('Inner Birds home page')
})
// define the about route
router.get('/inner', function (req, res) {
  res.send('Inner About birds')
})
// define user route
// router.get('/users', function (req, res) {
//   res.send('Inner users route About birds')
// })

module.exports = router