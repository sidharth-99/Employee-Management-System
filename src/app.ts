// import express from 'express';
// import bodyparser from 'body-parser';
// import './queries';

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


import * as express from 'express';

import { employeeRouter } from './routes';

const app = express();
app.use(express.json());

app.use('/employee', employeeRouter);

app.listen(8080, () => {
    console.log(`Server is listening on port 8080`);
});


