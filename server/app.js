var express=require('express')
var bodyParser=require('body-parser')
var path=require('path');

var app=express()

app.set('views',[__dirname+'/library/views'])
app.set('view engine','jade')

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/',require('./library/router/rtMain'))
app.use('/action',require('./library/router/rtAboutUs'));

app.use('/semantic',express.static(path.join(__dirname,'../semantic/dist')));
app.use(express.static(__dirname+'/public'))


app.listen(80)

process.on('uncaughtException', err=>console.log('Caught exception: '+err))
