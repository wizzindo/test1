// JavaScript Document
var http = require('http');
var url = require ('url');
var fs = require('fs');
var ip = require('./indexPost')
var querystring = require("querystring");
//fsjad;fjdsfsda

http.createServer(function (req, res) {
  var html;
  var address = url.parse(req.url, true);
  if(req.url=='/'){
    //Starting Page
    fs.readFile('index.html', function(err, data){
      if(err==null){
          res.writeHead(200, {'Content-Type': 'text/html'}); 
          res.write(data);
          res.end();
      } else {
        res.writeHead(500, {'Content-Type': 'text/html'});
        res.end(err.toString());
      }
    });
  } else if(address.pathname=='/indexS'){               
    if(req.method=="POST"){
      ip.processPost(req, res, function(data){  
        res.writeHead(200, {'Content-Type': 'text/html'});
        var query = req.body;// data;//address.query;
        html = req.url + '=' + req.method + '<br>' + data+ "<BR>" + query;//JSON.stringify(query);
        res.write(html);
        res.end();
      });
    } else {}
  }             
}).listen(9100);