const express = require('express')
const path = require('path')
const https = require( "https" );  // для организации https
const fs = require( "fs" )

const PORT = 443

httpsOptions = {
    key: fs.readFileSync("dveri-arsenal.ru.key"),
    cert: fs.readFileSync("dveri-arsenal.ru.crt")
}

const app = express()
app.use(express.static(__dirname))
app.use(express.static(path.resolve(__dirname, 'build')))

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

https.createServer(httpsOptions, app).listen(PORT)