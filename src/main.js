const express = require('express');
const app = express();
const router = require('./router');

app.use(router);

app.listen(8080, function(req, res){
    console.log("Servidor rodando");
});