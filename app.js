const express = require('express');
const app = express();

const hostname = '127.0.0.1';

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

// to set environment variable use set PORT=5000 
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listining To Port ${port}...`) )