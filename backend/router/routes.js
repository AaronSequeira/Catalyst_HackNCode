const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const router = express.Router()


require("../db/connnection");
const User = require('../model/userSchema');
const authenticate = require('../middleware/authenticate');
const { viewAllUsers, login, register, logout, addPoints, checkLoggedUser } = require('../controller/controller')

router.get('/' , (req,res) => {
    res.send("Backend Home Page");
})

router.get('/viewAllUsers', viewAllUsers)

router.get('/currentUser' ,authenticate, (req,res) => {
    res.status(200).send(req.rootUser)
})

router.get('/checkLoggedUser' , authenticate, checkLoggedUser )

router.post('/addPoints',authenticate, addPoints)

router.get('/logout' , logout )

router.post('/register' , register)

router.post('/login' , login )


module.exports = router
