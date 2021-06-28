// Node module for validation data
const Joi = require("joi");
const express = require('express');
const routes = require("./routes")

const app = express();
app.use(express.json());
app.use(routes)


// to set environment variable use set PORT=5000 
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listining To Port ${port}...`) )