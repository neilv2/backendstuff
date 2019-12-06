# README #

things should do 
$ npm install
**For use exemplo:**


 1. Config a data base connect in dbconnection.js

```
var mysql = require('mysql');
var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
  database: 'namedatabase'
});

module.exports = connection;
```
 3. Start aplication
Into folter project make **npm run dev**
to run in background, sudo nohup node bin/www >output.log &
Test http://localhost:3000/up

 4. Test with your table
http://localhost:3000/api/v1/crud?t=persons

Where **t** = **table** of the your data base


//test procedure
DELIMITER //
CREATE PROCEDURE testprocedure2
(IN testparam CHAR(20), IN numtoproject integer)
BEGIN
  SELECT * FROM pranith
  WHERE name = testparam
  LIMIT numtoproject;
END //
DELIMITER ;# backendstuff
