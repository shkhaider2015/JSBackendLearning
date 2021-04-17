const appp = require("./app")

console.log(appp)
appp.ap.get('/routes/r1', (req, res) => {
    res.send("This is from another file")
})

appp.ap.get('/routes/18', (req, res) => {
    res.send("This is from another file")
})