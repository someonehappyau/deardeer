'use strict';

var express=require('express');
var router=express.Router();
var path=require('path');

router.get('/', function(req,res){
	res.status(200).render('index');
});

router.get('/flower',function(req,res){
	res.status(200).render('flower',{page:'flower'});
});

router.get('/wedding',function(req,res){
	res.status(200).render('wedding',{page:'wedding'});
});

router.get('/aboutus',function(req,res){
	res.status(200).render('aboutus',{page:'aboutus'});
});

module.exports=router;
