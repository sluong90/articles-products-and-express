const express = require('express');
const app = express ();
const bp = require('body-parser')
const exphbs = require('express-handlebars')
const PORT = 8080;
const products = require('./routes/products');
// const articles = require('/routes/articles');
app.use(bp.urlencoded({extended: true}));
app.use(bp.json());
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs')
app.enable('view cache')
app.use('/products', products)
// app.use('/', articles)

app.get('/', (req,res) => {
    res.render('main')
})



app.listen(PORT, () => {
    console.log('SERVER IS LISTENING..')
})


