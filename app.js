// Node module for validation data
const Joi = require("joi")

const express = require('express');
const app = express();
app.use(express.json());

require("./routes")

const courses = [
    { id : 1, name : 'course1'},
    { id : 2, name : 'course2'},
    { id : 3, name : 'course3'},
    { id : 4, name : 'course4'},
]

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/api/numbers', (req, res) => {
    res.send([1,3,4,5])
})

app.get('/api/chars', (req, res) => {
    res.send(['a', 'b', 'c', 'd', 'e', 'f'])
})

app.get('/api/cars', (req, res) => {
    res.send(['BMD', 'Carrolla', 'Caltus', 'Suzuki', 'MiniBus', 'Datson'])
})
app.get('/api/medicens', (req, res) => {
    res.send(['Panadole', 'Disprol', 'Febrol', 'Ponistan', 'Mafinec', 'Zopan'])
})

// Parameters
app.get('/api/cars/:id', (req, res) => {
    res.send("Your Entered Id is : " +req.params.id)
})

// More Than one Parameters
app.get('/api/medicens/:year/:month', (req, res) => {
    res.send(req.params.year + req.params.month)
})

// Query String Parameters
app.get('/api/queryA', (req, res) => {
    res.send(req.query)
})

app.get('/api/courses', (req, res) => {
    res.send(courses)
})
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if(!course) res.status(404).send("The course with the given Id was not found")
    res.send(course)
})

// Post Request
app.post('/api/courses', (req, res) => {

    const schema = {
        name: Joi.string().min(3).required()
    };

    const result = Joi.validate(req.body, schema)
    console.log(result)
    

    if(result.error)
    {
        // 400 bad request
        res.status(400).send(result.error.details[0].message)
        return;
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    }

    courses.push(course)
    res.send(course)
})

// to set environment variable use set PORT=5000 
const port = process.env.PORT || 3000;

module.exports = {
    ap : () => app
}

app.listen(port, () => console.log(`Listining To Port ${port}...`) )



// to run server nodemon app.js