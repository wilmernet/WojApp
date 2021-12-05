// Import module Router() to create routes
const router = require('express').Router();
const User   = require('../models/user');

// Import @hapi/joi to validate email and password
const Joi = require('@hapi/joi');

// Import bcrypt to encrypt the password
const bcrypt = require('bcrypt');

// Import jsonwebtoken
const jwt = require('jsonwebtoken');

// Schema Register using Joi validations
const registerSchema = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    lastname: Joi.string().min(3).max(255).required(),
    userIdentify: Joi.string().required(),
    role: Joi.string().required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(5).max(1024).required()
})

// Register
router.post('/register', async (req, res) => {

    // We are using the object's error property obtained from registerSchema.validate()
    const { error } = registerSchema.validate(req.body)

    // If the error exist, then the program execution ends returning the error
    if(error) {
        return res.status(400).json(
            { error: error.details[0].message }
        )
    }

    // Let's check if the registered email exists or not
    const thisEmailExists = await User.findOne({ email: req.body.email });
    if(thisEmailExists) {
        return res.status(400).json(
            {error: 'Esa cuenta de email ya fue registrado'}
        )
    }

    const thisUserIdExists = await User.findOne({ userIdentify: req.body.userIdentify });
    if(thisUserIdExists) {
        return res.status(400).json(
            {error: 'Ese número de identificación ya fue registrado'}
        )
    }

    // Hash and Password
    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(req.body.password, salt)

    // Creating a new user using the model from user.js
    const user = new User({
        name: req.body.name,
        lastname: req.body.lastname,
        userIdentify: req.body.userIdentify,
        role: req.body.role,
        email: req.body.email,
        password: password
    });

    // Using .save() to record the data into the database
    try {
        const savedUser = await user.save()
        res.json({
            error: null,
            data: savedUser
        })
    } catch (err) {
        res.status(400).json({error})
    }

})

// Login Schema
const loginSchema = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(5).max(1024).required()
})

// Login
router.post('/login', async (req, res) => {
    // Login validations
    const { error } = loginSchema.validate(req.body)
    if(error) res.status(400).json({error: error.details[0].message})

    // Checking if email exists
    const user = await User.findOne({email: req.body.email})
    if(!user)
        return res.status(400).json({error: 'Usuario o contraseña invalidos'})

    // Password validation within the database
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if(!validPassword)
        return res.status(400).json({error: 'Usuario o contraseña invalidos'})

    // Token generation
    const token = jwt.sign({
        name: user.name,
        id: user._id
    }, process.env.SECRET_TOKEN)

    // Putting the token into the header and response body
    res.header('auth-token', token).json({
        error: null,
        data: { token },
        message: 'Bienvenido'
    })

})

module.exports = router