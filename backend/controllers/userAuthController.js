const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../modals/userAuthModal')
// des  RegisterUser new  users
// routes POST /api/userAuth
//access Public 
const registerUser = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password, gender } = req.body;
    if (!email || !password || !firstName || !lastName || !gender) {
        res.status(400)
        throw new Error("Please add all fields")
    }
    const userExists = await User.findOne({ email })
    // console.log("====>>", userExists);
    if (userExists) {
        res.status(400).json({ error: "User already exists" })
        throw new Error("User already exists")
    }
    else {
        if (password.length > 8 || password.length < 8) {
            res.status(400).json({ error: "$password length should be minimum  8 Characters." })
            throw new Error(`$password length should be minimum  8 Characters.`)
        }
    }
    // if () {
    //     res.status(400).json({ error: "User already exists" })
    //     throw new Error("User already exists")
    // }
    //check userExists User password
    // const salt = await bcrypt.getSalt(10)
    // const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        firstName,
        lastName,
        email,
        password,
        gender
    })

    if (user) {
        res.status(201).json({
            status: true,
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)

        })
    } else {
        res.status(400).json({ status: false })
        throw new Error('Invalid User  Data')
    }
})


// des  LoginUser new users
// routes POST /api/userAuth/login
//access Public 
const loginUser = asyncHandler(async (req, res) => {
    //console.log("dsdsds====>", req.text);
    const { email, password } = req.body
    //check the Email
    const user = await User.findOne({ email })
    if (user.email != email) {
        res.status(400)
        // throw new Error('Invalid credentials')
        res.json({ error: 'Invalid email' })
    }
    if (user.password != password) {
        res.status(400)
        // throw new Error('Invalid credentials')
        res.json({ error: 'Invalid password' })
    }
    if (user) {
        res.json({
            status: true,
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })

    }
    // else {
    //     res.status(400)
    //     // throw new Error('Invalid credentials')
    //     res.json({ error: 'Invalid credentials' })
    // }
})

// genrate Token 

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}
// des  Get  users Data
// routes GET /api/userAuth/me
//access Public 
const getMe = asyncHandler(async (req, res) => {
    //console.log("dsdsds====>", req.text);
    const { _id, name, email } = await User.findById(req.user.id)

    res.status(200).json({
        id: _id,
        name,
        email
    })
})
module.exports = {
    registerUser,
    loginUser,
    getMe
}