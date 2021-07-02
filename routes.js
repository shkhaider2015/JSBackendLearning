const express = require("express");
const { Pool } = require("pg")
const router = express.Router();
const rout1 = require("./routes/route1");


const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: 5432,
  max: 20,
})



// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
router.use('/users', rout1);
// define the home page route
router.get('/', async (req, res) => {
  const result = await pool.query("SELECT * FROM Employee")
  console.table(result.rows);
  res.send('Inner Birds home page')
})
// define the about route
router.get('/inner', async (req, res) => {
  const result = await pool.query("SELECT * FROM Employee WHERE id=2")
  console.table(result.rows);
  res.send('Inner About birds')
})
// define user route
// router.get('/users', function (req, res) {
//   res.send('Inner users route About birds')
// })

module.exports = router