const express = require('express');

const router=express.Router();
const HomeController = require('../controllers/HomeController');
router.get('/', HomeController.home);
router.use('/project', require('./project'));
module.exports = router;