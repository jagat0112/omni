const express = require('express');
const router = express.Router();
const mongoose = require("mongoose")
const Line = require('../model/lineSchema')

router.get('/:id', (req,res)=> {
    res.status(200).send(req.params.id)
})

router.post('/',async(req,res)=>{
    try {
        const{planId,phoneNumber, phoneModel } = req.body
        const plan = await Plan.findById(planId);
        const line = await Line.create({
            phoneNumber, plan, phoneModel
        })
    } catch (error) {
        console.log(error)
    }
})


module.exports = router;