const http = require('http')

const server = http.createServer((req, res) => {
    console.log("api running")
})

server.listen(5000)