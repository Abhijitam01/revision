const express = require('express');
const app = express();

function ticketChecker(req , res , next){
    const ticket = req.query.ticket;
    if (ticket === "free"){
        next();
    } else {
        res.status(401).send('ticket is not free')
    }
}

app.use(ticketChecker);

app.get('/ride1' , function() {
    res.send('you rode the first ride');
})


app.get('/ride2' , function() {
    res.send('you rode the second ride');
})

app.get('/ride3' , function() {
    res.send('you rode the third ride');
})

app.listen(3000);