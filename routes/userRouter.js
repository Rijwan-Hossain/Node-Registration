const express = require('express'); 
const router = express.Router(); 
const { registration } = require('../controller/userController'); 

router.post('/api/signup', registration)
router.post('/api/login', () => {})

module.exports = router; 
