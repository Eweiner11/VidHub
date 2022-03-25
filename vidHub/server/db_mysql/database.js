const e = require("express");
const mysql = require("mysql");
const { ModuleFilenameHelpers } = require("webpack");

mysqlConfig = {
  host: "localhost",
  user: "root",
  password: "password",

};

const connection = mysql.createConnection(mysqlConfig);

connection.query('CREATE DATABASE IF NOT EXISTS vidhub')
connection.query('use vidhub')

let createUsersTable = `create table if not exists Users(id int primary key auto_increment, userName varchar(255))`;
connection.query(createUsersTable, (err, results) => {
  if (err) throw err;
});

let createFavoritesTable = `create table if not exists Favorites(id int primary key auto_increment, userId int , link varchar(255), name varChar(255))`;
connection.query(createFavoritesTable, (err, results) => {
  if (err) throw err;
});


module.exports.connection = connection