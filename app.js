require('dotenv').config();
// Node module for validation data
const Joi = require("joi");

const express = require('express');
const routes = require("./routes")

const app = express();
app.use(express.json());
app.use(routes)

// console.log("Process Env : ", process.env)
// to set environment variable use set PORT=5000 
const port = process.env.PORT || 3000;

// const { Pool } = require('pg')
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'postgres',
//   password: 'Progressive0314',
//   port: 5432,
// })
// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })

app.listen(port, () => console.log(`Listining To Port ${port}...`) )