const User = require('../models/User'); 
const bcrypt = require('bcryptjs'); 

const login = (req, res) => {

}


const registration = (req, res) => {
    // take user data 
    // check duplicate username 
    // hash password using bcryptjs 
    // save data
    // return info 

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
                            res.json({ 
                                message: 'Signup successful', 
                                account: user 
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