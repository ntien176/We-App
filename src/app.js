/* Declaring*/
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const app = express()
const exphbs = require('express-handlebars')
const port = 3000




/* App */
/* Static files */
app.use(express.static(path.join(__dirname, "public")))


console.log(path.join(__dirname, "public"))
    // D: \WEB\ NodeJs\ F8\ src\ resources\ public\ img\ logo.png
    /* HTTP Logger */
app.use(morgan('combined'));
/* Template Engine */
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources\\views'));
// console.log(path.join(__dirname, 'resources/views'))


app.get('/', (req, res) => {
    res.render('home')
})

app.get('/news', (req, res) => {
    res.render('news')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})