const User = require('../models/User'); 
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken'); 

const login = (req, res) => {
    // get data 
    // check username available or not
    // compare with hash password using bcryptjs 
    // create token 
    // return token 

    let { username, password } = req.body; 
    User.findOne({username}) 
        .then(user => { 
            if(user.length === 0) {
                return res.json({
                    message: 'Incorrect Username'
                }) 
            } 
            
            bcrypt.compare(password, user.password, (err, result) => { 
                if(err) { 
                    return res.json({ message: 'Server Error' })
                } 
                if(!result) { 
                    return res.json({ 
                        message: 'Wrong Password'
                    }) 
                } 
                const payload = { 
                    id: user._id, 
                    username 
                } 
                const token = jwt.sign(payload, 'SECRET', { expiresIn: '2h' }) 

                return res.json({ 
                    message: 'Login successful', 
                    token: `Bearer ${token}` 
                }) 
            }) 
        }) 
} 


const registration = (req, res) => {
    // take user data 
    // check duplicate username 
    // hash password using bcryptjs 
    // save data
    // create token
    // return token

    let { username, password } = req.body;
    User.find({ username }) 
        .then(user => { 
            if(user.length > 0) { 
                return res.json({ 
                    message: 'You cannot signup because someone already have an account with this username'
                }) 
            } 
            else { 
                // hashing password
                bcrypt.hash(password, 10, (err, hash) => { 
                    if(err) { 
                        return res.json({err}) 
                    } 
                    let newUser = new User({ 
                        username, 
                        password: hash 
                    }) 

                    newUser.save() 
                        .then(user => { 
                            const payload = { 
                                id: user._id, 
                                username 
                            } 
                            const token = jwt.sign(payload, 'SECRET', { expiresIn: '2h' }) 
            
                            return res.json({ 
                                message: 'Signup successful', 
                                token: `Bearer ${token}` 
                            }) 
                        }) 
                        .catch(err => { 
                            res.json({ 
                                message: 'server error', 
                                error: err 
                            }) 
                        }) 
                }) 
            } 
        }) 
        .catch(err => { 
            res.json({ 
                message: 'server error', 
                error: err 
            }) 
        }) 
} 

module.exports = {
    registration, 
    login 
} 


