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

// models.nch.findAll({
//     //* 원하는 컬럼만 설정하기
//     attributes:['id','co2',['co','cotest']],
//     //! where 절 설정
//     where:{
//         id:{
//             [Op.lt]:10
            
//         }
//     },
//     //! order by 절
//     order:[
//         'co2'
//     ],
//     //! raw값만 가져오기 설정
//     raw:true
// }).then(console.log);

// models.domain.findAll({
//     raw:true
// }).then(console.log);

 models.domain.findAll({
    include:[models.domainDetail],
    
    raw:true
}).then(console.log);
