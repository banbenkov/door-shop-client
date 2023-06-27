const express = require('express')
const path = require('path')
const http = require('http')
const https = require( "https" );  // для организации https
const fs = require( "fs" )

httpsOptions = {
    key: fs.readFileSync("dveri-arsenal.ru.key"),
    cert: fs.readFileSync("dveri-arsenal.ru.crt")
}

const app = express()
app.use(express.static(__dirname))
app.use(express.static(path.resolve(__dirname, 'build')))

app.get('/sitemap', (req,res) => {
    res.sendFile(path.join(__dirname, 'sitemap.xml'))
})

app.get('/catalog', (req,res) => {
    res.sendFile(path.join(__dirname, 'catalog.xml'))
})

app.get('*', (req,res) => {
    if (req.secure) {
        res.sendFile(path.join(__dirname, 'build', 'index.html'))
    } else {
        res.redirect('https://' + req.headers.host + req.url);
    }
})


const httpServer = http.createServer(app);
const httpsServer = https.createServer(httpsOptions, app);

httpServer.listen(80, () => {
    console.log('HTTP server running on port 80')
})

httpsServer.listen(443, () => {
    console.log('HTTPS server running on port 443')
})