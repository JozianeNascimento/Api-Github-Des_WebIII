const express = require('express');
const router = express.Router();
const consomeApi = require('./consomeApi');

router.get('/pesquisandoRepo/GitHub/:name', consomeApi.consomeApiGitHub);

module.exports = router;