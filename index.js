// const http = require('http')
// const port = 8000
// const server = http.createServer(function(req, res){
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end("Hello World")
// })

 
// server.listen(port, ()=> {
//     console.log("Server runing on " + port)
// })
 // -------------------------------- //

// const http = require('http')
// const server = http.createServer((req, res) => {
//     if (req.url=='/about') {
//         res.end(`<h1>Hello adil How Are You</h1>`)
//     }

//     else if(req.url == '/contact') {
//         res.end(`<h1>Hello to the contact Page</h1>`)
//     }

//     else if(req.url== '/') {
//         res.end(`<h1>Hello To the home page</h1>`)
//     }

//     else {
//         res.writeHead(404)
//             res.end("Not Found 404")
        
//     }
// }).listen(8000)


// ------------------------------- Express ----------------------------------//


// const express = require("express")
// const app = express()
// port = 8000


// app.get('/', (req, res) => {
//     res.send("Hello World")
// })
// app.get('/about', (req, res) => {
//     res.json({
//         name : "Hello adil"
//     })
// })
// app.listen(port, () => {
//     console.log(`Server Runing on ${port}`)
// })


// const express = require("express")
// const app = express()
// const path = require('path')
// const port = 8000

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'index.html'))
// })

// app.listen(port, () => {
//     console.log(`server running on ${port}`)
// })


// ---------------------------------------------------------//

// const express = require('express')
// const app = express()

// const path = require('path')
// app.use(express.static('public'))

// app.listen(8000)

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'index.html'))
// })



//---------------------------------------------------------//


// const express = require('express')
// const app = express()
// const ejs = require('ejs')

// app.set('view engine', 'ejs')
// app.use(express.static('public'))

// app.get('/', (req, res) => {
//     res.render('index')
// })

// app.listen(8000)


// -------------------------------------- //

const express = require('express')
const app = express()
const ejs = require('ejs')
const { escapeRegExpChars } = require('ejs/lib/utils')
app.set('view engine', 'ejs')
app.use(express.static('public'))


app.get('/', (req, res)=> {
    res.render("index")
})


app.use((req, res, next) => {
    res.status(404).render('notfound')
})

app.get('*', (req, res) => {
    res.render('notfound')
})
app.listen(8000)