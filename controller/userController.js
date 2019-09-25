const User = require('../models/User'); 

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
                res.json({ 
                    message: 'You cannot signup because someone already have an account with this username'
                }) 
            } 
            else { 
                res.json({ 
                    message: 'Hurray! you can signup' 
                }) 
            } 
        }) 
        .catch() 
} 

module.exports = {
    registration
}