const express = require('express');

const router = express.Router();

const bookingController = require("./controller/booking");

//bookingController.bookTickets
router.get("/bookTicket",(req, res) => res.send("OK"));

module.exports = router;