const express = require('express');
const { helloController } = require('../Controller/applicationController');

const router = express.Router();

router.get('/getHello', helloController);

module.exports = router;
