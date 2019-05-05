var http = require("http");
var express = require('express');
var app = express();
var mysql      = require('mysql');
var bodyParser = require('body-parser');

//start mysql connection
var connection = mysql.createConnection({
  host     : 'localhost', //mysql database host name
  user     : 'root', //mysql database user name
  password : 'root@mysql.com', //mysql database password
  database : 'AngularApp' //mysql database name
});


connection.connect(function(err) {
    if (err) throw err
    console.log('You are now connected...')
  })

  
//start body-parser configuration
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
//end body

//create app server
var server = app.listen(3000,  "127.0.0.1", function () {

    var host = server.address().address
    var port = server.address().port
  
    console.log("Example app listening at :", host, port)
});


//rest api to get all results
app.get('/getPosts', function (req, res) {
    connection.query('SELECT * FROM blogTable', function (error, results, fields) {
       if (error) throw error;
       res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
       res.end(JSON.stringify(results));
     });
 });


// var mysql = require('mysql');
// var pool =  mysql.createPool({
// host : 'localhost',
// user : 'root',
// password: 'root@mysql.com',
// database: 'AngularApp'
// });
 
 
// var readTable = 'SELECT * FROM blogTable';
 

// pool.getConnection(function(err, connection){    

//   connection.query(readTable, function(err, rows){
//     if(err) throw err;
//     else {
        
//         rows.forEach(element => {
//             console.log(element.heading);
//             console.log(element.blog);
//             console.log(element.writter);
//         });
//     }
//   });
//  console.log(err);

 
 
//   connection.release();
// });