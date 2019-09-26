const express = require('express'); 
const router = express.Router(); 
const { registration, login } = require('../controller/userController'); 

router.post('/api/signup', registration); 
router.post('/api/login', login); 

module.exports = router; 
