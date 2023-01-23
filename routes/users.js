const express = require('express');
const router = express.Router();

const userProfile = require('../controllers/user_controller');

router.get('/profile', userProfile.profile); // 1. Once /user/profile page is reached it will ask to access userProfile and display what is in there

module.exports = router;