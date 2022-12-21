const pg = require('pg');
module.exports = createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'Reviews'
});