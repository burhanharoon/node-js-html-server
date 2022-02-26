const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const port = 5000


app.use('/add-product', (req, res, next) => {
    res.send(`    <form action="/product" method="post">
    <input type="text" name="title">
    <button type="submit">
        Submit
    </button>
</form>
`)
})

app.use('/product', (req, res, next) => {
    console.log(req.body)
    res.send(`<h1>/Product</h1>`)
})

app.use('/', (req, res, next) => {
    res.send("Api running")
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})