const express = require("express");

const router = express.Router();

const db = require("../data/db-config");


router.get("/", (req, res) => {
    db("cars")
        .then(cars => {
            res.status(200).json(cars)
        })
        .catch(error => {
            res.status(500).json({ error: "Something went wrong " + error.message })
        })
})


module.exports = router; 