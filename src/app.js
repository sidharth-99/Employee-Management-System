"use strict";
// import express from 'express';
// import bodyparser from 'body-parser';
// import './queries';
exports.__esModule = true;
// const port=3000;
// const app=express();
// const { Client } = require('pg');
// const pool = new Client({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'employee',
//     password:'',
//     port: 5432,
// });
// if(pool.connect()){
// console.log("Connected");
// } 
// app.listen(5000,()=> console.log('Server Running'));
var express = require("express");
var routes_1 = require("./routes");
var app = express();
app.use(express.json());
app.use('/employee', routes_1.employeeRouter);
app.listen(8080, function () {
    console.log("Server is listening on port 8080");
});
