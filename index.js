const express = require('express')
const path = require('path')

const app = express()

app.use("/static", express.static(path.join(__dirname, '/build/static')))



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/build/index.html'))
})

app.listen(3000, (error) => {
    if (error) throw error
    console.log("Server started")
})