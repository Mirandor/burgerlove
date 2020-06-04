var mysql = require("mysql");
var gradient = require('gradient-string');
let alertGradient = gradient([
  {color: '#d11717', pos: 0},
  {color: '#d62d2d', pos: 0.2},
  {color: '#ff6645', pos: 1}
]);

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "burgers_db"
});

connection.connect(function (err) {
  if (err) {
    console.log(" ");
    console.log(alertGradient("error connecting: " + err.stack));
    console.log(" ");
  return;
  }
    console.log(" ");
    console.log(gradient.mind("  connected as id: " + connection.threadId));
    console.log(" ");
});

module.exports = connection;