const express = require('express');
const homeController = require('../controllers/home_controller'); // 3. Gets Controller or path for the routes

//1. route handler is code that is looking for a request to a specific incoming URL such as /login and often a specific HTTP verb such as POST and has specific code for handling that precise URL and verb

const router = express.Router(); // Only started route handler

console.log('Router loaded')

router.get('/', homeController.home); // 4. Fetches the route
router.use('/user', require('./users')); //5. This requires user to link it to user pade

//2. Module exports are the instructions that tell Node. js which bits of code (functions, objects, strings, etc.) to export from a given file so that other files are allowed to access the exported code.
module.exports = router;