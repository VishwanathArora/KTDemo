require('dotenv').config();

const express = require('express');

var app = express();

const server = require('http').createServer(app);

const sample = require('./routes');

app.get("/", (req, res) => res.send("OK")); // this is for the testing purpose on live server

app.use("/sample",sample);


// error handler
// app.use(common.sendErrorEmail);

app.set('0.0.0.0');
server.listen(process.env.PORT, (err) => {
    if (err) console.log("Unable to start server");
    else console.log(`Server is up on port ${process.env.PORT}!`);
});