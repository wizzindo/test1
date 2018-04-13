// JavaScript Document
var querystring = require("querystring");
exports.processPost = function (req, res, callback){     
    var queryData = "";
    req.on('data', function(chunk){
      console.log("test:"+chunk.toString());
      queryData += chunk;
      if(queryData.length > 1e6) {
          queryData = "";
          res.writeHead(413, {'Content-Type': 'text/plain'}).end();
          req.connection.destroy();
      }
    });
    
    req.on("end", function(){             
            
      req.post = querystring.parse(queryData);   
      callback(queryData);
    });
}
