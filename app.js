const express = require('express')

const app = express()

const port = 5000

// NEXT is a middleware
// It holds execution before going on the another res
// execeutes from top to bottom
app.use('/', (req, res, next) => [
    next()  // This transfers control to next res object
])
app.use('/', (req, res, next) => [
    res.send("Api running")
])

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})