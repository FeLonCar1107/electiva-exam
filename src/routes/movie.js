const express = require('express');
const movies_routes = express.Router();

//Crear una nueva Movie
movies_routes.post('/movie',(req,res)=>{})
//Listar todos las Movies existentes
movies_routes.get('/movie',(req,res)=>{})
//Consultar un Moviea en especifico
movies_routes.get('/movie/:idMovie',(req,res)=>{})
//Actualizar una Movie en especifico
movies_routes.put('/movie/:idMovie',(req,res)=>{})
//Eliminar una Movie en especifico
movies_routes.delete('/movie/:idMovie',(req,res)=>{})

module.exports = movies_routes;