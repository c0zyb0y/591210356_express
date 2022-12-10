var express = require('express');
var router = express.Router();
const companyController = require('../controllers/companyController')

/* GET home page. */
router.get('/', companyController.index );

router.get('/:id', companyController.show );

router.post('/', companyController.insert );

router.delete('/:id', companyController.destroy );

module.exports = router;