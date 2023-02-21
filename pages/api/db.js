require('dotenv').config();
const mysql = require('mysql2');

const db_connect = () => {
    console.log('Connected to PlanetScale!');
    return mysql.createConnection('mysql://z3jyz7m40gh6yeb0h1sz:pscale_pw_FxOastmqAJiGeVTEjggGhfGPkPuVdOWNC9pMkg9cqJt@us-east.connect.psdb.cloud/roommie?ssl={"rejectUnauthorized":true}');
}
module.exports = db_connect;