const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sqlLearn',
  database: 'math_help',
  port: 3306
});

connection.connect(function(err) {
    console.log("Connected!");

    connection.query('SELECT * FROM unit1', (error, results, fields) => {
        if (error) {
          console.error('Error executing query:', error);
          return;
        }
        
        console.log('Query results:', results);
        
        connection.end((error) => {
        });
      });
  });

