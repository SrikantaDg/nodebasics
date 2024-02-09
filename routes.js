const fs = require('fs');
function routeRequest(req,res){
    if(req.url=='/'){
     res.write('<html>');
     res.write('<head><title></title></head>');
     res.write('<body><form action="/message" method="post"><input type="text" name="message"/><button>Send</button></form></body>')
     res.write('<html>');
     return res.end();
    }
    else if(req.url=='/message' && req.method=='POST'){
       const body = [];
       req.on('data',(chunk)=>{
          body.push(chunk);
       });
       req.on('end',()=>{
          //const parsedBody ='';
          const parsedBody = Buffer.concat(body).toString();
          const parsedBodyArr = parsedBody.split('=');
          fs.writeFileSync('message.txt',parsedBodyArr[1]);
       });
       res.statusCode = 302;
       res.setHeader('Location','/');
       return res.end();
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Nodejs page</title></head>');
    res.write('<body><h1>My First Nodejs Page</h1></body>');
    res.write('</html>');
    res.end();
    // console.log(req.url);
 }

 module.exports =  routeRequest;