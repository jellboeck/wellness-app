// use dotenv to keep passphrases hidden from public view
require("dotenv").config();
// use keys.js to keep passphrases hidden
var keys = require("../keys.js");

module.exports = {

    
    "development": {
    "username": keys.database.username,
    "password": keys.database.password,
    "database": keys.database.database,
    "host": "127.0.0.1",
    "dialect": "mysql"
},
"test": {
    "username": keys.database.username,
    "password": keys.database.password,
    "database": keys.database.database,
    "host": "127.0.0.1",
    "dialect": "mysql"
},
"production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
}
}