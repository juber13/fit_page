const express = require('express');
const router = express.Router();

const {showAllList , getDetails }  = require('../controllers/app.controller')



router.get('/' , showAllList);
router.get('/:id' , getDetails)


module.exports = router;