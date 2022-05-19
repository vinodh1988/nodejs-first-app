var express = require('express');
app=express();


var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0'


app.get("/",function(request,response){
    response.send("The application is running very very perfectly")
})
app.listen(port,ip);
console.log("app is now actually listening on %s port and %s ",ip,port)
