 const fs = require('fs');
 const express = require('express');

 fs.readFile('index.html', 'utf8', (err, data) => {
 })

 const app = express();
 app.get('/', (req, res) => {
     res.send('Hello World!');
    }
    )
app.post('/', function (req,res) {
    res.send('hello world fromt he post endpiont');
})

app.get('/get' ,  function (req , res) {
    res.send('hello world from the get endpoint');
})

app.listen(3000)