const express = require('express');
const api = express();
const porta = 3000;
const mongoose = require ('mongoose');

const endercoBanco = 'mongodb+srv://luiza:<senha>@cluster1.m1gleci.mongodb.net/test';

mongoose.connect(enderecoBanco);

mongoose.connection.on('error', function (erro) {
    console.log('[ERRO]: conexão com o banco de dados não foi estabelecida' + erro);
});

mongoose.connection.on('desconectado', function () {
    console.log('[AVISO]: Aplicação desconectada');
});

mongoose.connection.on('conectado', function () {
    console.log('[AVISO]: Aplicação conectada');
});

//localhost:3000
api.listen(porta, function (){
    console.log('Servidor rodando na porta' + porta);
})

//IP_API:3000/status

api.get('/status', function(req,res){
    res.send('Api online');
})