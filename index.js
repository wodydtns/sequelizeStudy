const { Client } = require('pg');
const models = require('./models');
const {Op} = require("sequelize");

// const client = new Client({
//     user : 'postgres',
//     database : 'jwpark',
//     password : 'postgres',
//     port : 5432,
// });

// client.connect();

models.nch.findAll({
    attributes:['id','co2',['co','cotest']],
    where:{
        id:{
            [Op.lt]:10
            
        }
    }
}).then(console.log);
    
