const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => { 
    try{
        const { name, age, gender, locality, phno, email } = req.body;
        const user = new User({
            name, age, gender, locality, phno, email
        })

        const registeredUser = await user.save();
        res.json(registeredUser);
    } 
    catch(error){
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;