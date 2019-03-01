var express = require('express');
var sql = require("mssql");

//var app = express();

var config = {
    user: 'sa',
    password: '123',
    server: 'DESKTOP-I6ADB38', 
    database: 'prueba',
    port: 49175,
    instancename: 'SQLEXPRESS'
};


sql.connect(config, function (err) {
    if (err) console.log(err);
    // create Request object
    var request = new sql.Request();
});

module.exports.connect = sql;