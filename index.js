const express = require('express');
const app = express();
const port = 3001;
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const flash = require('connect-flash');
const middleware = require('./config/middleware');
const session = require('express-session');
app.use(express.urlencoded());
app.use(express.static('./assets'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
app.use(session({
    secret: "e3eIJ!9Xt39W",
    resave: false,
    saveUninitialized: false
}));

app.use(flash());
app.use(middleware.setFlash);
app.use('/', require('./routes'));
app.listen(port, function(err){
    if(err){
        console.log('error in connecting to port', err);
    }
    console.log('app is listen successfully on port: ', port)
})