'use strict';

var mysql=require('mysql');

var pool=mysql.createPool({
	connectionLimit : 2,
		host		: 'localhost',
		user		: 'user',
		password	: 'password',
		database	: 'database'
});

module.exports=pool;
