const express = require("express");

const router = express.Router();

const db = require("../data/db-config");

function FieldValidator(req, res, next) {
    if (req.body.VIN && req.body.Make && req.body.Model && req.body.Mileage) {
        next();
    } else {
        res.status(400).json({ error: "please provide all the needed values (VIN, Make,Model,Milage)" })
    }
}


router.get("/", (req, res) => {
    db("cars")
        .then(cars => {
            res.status(200).json(cars)
        })
        .catch(error => {
            res.status(500).json({ error: "Something went wrong with:- " + error.message })
        })
})

router.post("/", FieldValidator, (req, res) => {
    db("cars").insert(req.body)
        .then(car => {
            res.json('New Car profile got created with an id of ' + car[0]);        })
        .catch(error =>{
            res.status(500).json({ error: "Something went wrong with:- " + error.message })
        })
})

router.delete('/:id', (req, res)=>{
    db('cars').where({id : req.params.id}).del()
        .then(deleted =>{
            if(deleted === 1){
                res.json(deleted + " Car infomation got DELETED!")
            }else{
                res.status(400).json({message: "Car profile with that specific ID does not exist in the DataBase"})
            } 
        })
        .catch (error => {
            res.status(500).json({ message: 'Something went wrong with:- ' + error.message });
        })
})


module.exports = router; 