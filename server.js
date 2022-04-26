const express = require('express')
const path = require('path')
/* const serveStatic = require('serve-static') */

const app = express()

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('build'))
}
//here we are configuring dist to serve app files
/* app.use('/', serveStatic(path.join(__dirname, '/dist'))) */

// this * route is to serve project on different page routes except root `/`
app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'build','index.html'))
})

const port = process.env.PORT || 8080
app.listen(port)
console.log(`app is listening on port: ${port}`)