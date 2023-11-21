const express = require('express');
const router = express.Router();

const StudentController = require('../app/controllers/StudentController');

router.get('/all', StudentController.all)
router.get('/:studentId', StudentController.getOne)
router.put('/:userId', StudentController.updateAccount)

module.exports = router;