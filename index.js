var express = require('express');
app=express();

bgcolor="yellow"

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0'


app.get("/",function(request,response){
    response.send('<h1 style="background-color:'+bgcolor+';">The application is running very very perfectly</h1>')
})
app.listen(port,ip,function(){
      let randomcolors =["blue","red","green","yellow"];
    
       bgcolor= randomcolors[Math.round(Math.random()*3)]
});
console.log("app is now actually listening on %s port and %s ",ip,port)
