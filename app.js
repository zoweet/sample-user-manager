const express = require('express');
const router = express.Router();
const path = require('path');


let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');



app.get('/index',(req, res) => {
    res.render('index', {
    title: 'your form',
    message:'This is my message',
    partial: 'is cool!'
    });
});

app.get('/user', function (req, res, next) {
    res.send('This is your form');
});

app.listen(3000);

console.log('listen on port 3000');