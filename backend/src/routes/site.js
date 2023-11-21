const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.post('/login', siteController.login)
router.post('/register', siteController.register)
router.delete('/account/:userId', siteController.deleteAccount)
// router.use('/register', siteController.registerModule)

module.exports = router;