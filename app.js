const express = require('express');
const app = express();
const router = express.Router();

app.use('/', (req, res, next) => {
    res.status(200).json({
        message: "it works"
    })
    console.log("it works");
})

module.exports = app;