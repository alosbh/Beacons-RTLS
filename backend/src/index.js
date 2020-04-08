const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();

// app.use(cors());
app.use(express.json());
app.use(routes);

app.post('/teste', (request,response)=>{

    console.log("um visitante");

    return response.send("hello, youre welcome");
})

app.listen(3015);
