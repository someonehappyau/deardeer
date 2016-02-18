var express=require('express');
var router=express.Router();

var pool=require('../../db/dbpool');
var mysql=require('mysql');

router.post('/aboutus/leavemessage/',function(req,res){
	var data={
		ip_addr:req.ip,
		firstname:req.body.firstname,
		lastname:req.body.lastname,
		email_addr:req.body.email,
		contact_number:req.body.contactnumber,
		content:req.body.message
	};
	console.log(mysql.format('insert into dd_message set ?',[data]));
	pool.query('insert into dd_message set ?',[data],function(err,data){
		if (err) {
			res.status(500).end('Error when leaving a message.');
			console.log(JSON.stringify(err));
		}
		else if (!data) res.status(500).end();
		else res.status(200).end('Successfully leaving a message.');
	});
});

module.exports=router;
