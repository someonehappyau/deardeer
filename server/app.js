var express=require('express')
var bodyParser=require('body-parser')
var path=require('path');

var logger=require('morgan');
var FileStreamRotator=require('file-stream-rotator');
var fs=require('fs');

var app=express()

var logDirectory = __dirname + '/log';

// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

// create a rotating write stream
var accessLogStream = FileStreamRotator.getStream({
  filename: logDirectory + '/access-%DATE%.log',
  frequency: 'daily',
  verbose: false,
  date_format: 'YYYYMMDD'
});

app.enable('trust proxy');

// setup the logger
app.use(logger('combined', {stream: accessLogStream}));

// set view engine
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
