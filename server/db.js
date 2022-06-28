const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: "5434",
    host: "localhost",
    port: 5432,
    database: "news_app_db"
})

module.exports = pool