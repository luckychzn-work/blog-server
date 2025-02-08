const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.PORT.user,
    host: process.env.PORT.host,
    database: process.env.PORT.database,
    password: process.env.PORT.password,
    port: process.env.PORT,
});



module.exports = pool; 