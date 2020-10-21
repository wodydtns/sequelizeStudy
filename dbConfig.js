const { Client } = require('pg');

const client = new Client({
    user : 'postgres',
    database : 'jwpark',
    password : 'postgres',
    port : 5432,
});