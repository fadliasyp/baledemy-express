const express = require('express')
const app = express()
const port = 3000
const userRouter = require('./router/users')
const bodyParser = require('body-parser')

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const myLogger = function (req, res, next) {
    req.time = new Date().toString()
    // console.log(req.time)
    next()
  }
app.use(myLogger)
// static
app.use(express.static('public'))

// ejs
app.set('view engine', 'ejs')

app.get('/',(req, res) => {
    const kelas = {
        id: 1,
        nama: 'javascript',
        date: req.time.toString()
    }
    res.render('pages/index',{
        kelas: kelas
    })
})

app.get('/about', (req, res) => {
    res.render('pages/about')
})

// panggil users
app.use(userRouter)

app.listen(port, () => {
    console.log('listen at http://localhost:3000')
})