const express = require('express');

let app = express();

app.get('/contact',function(req,res,next){
    res.send('<h1>contact page!</h2>');
});

app.get('/',function(req,res,next){
    res.send('<h1>Hello Express!</h2>');
});

/* app.use('/',function(req,res,next){
    console.log('in first middleware');
    //sd();
})

app.use('/contact',function(req,res,next){
    console.log('in second middleware');
}) */


app.listen(3000);