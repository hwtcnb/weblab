const express = require("express");
const path = require("path");
  
const app = express();

const jsonParser = express.json();

app.use(express.static(path.join(__dirname, 'public/css/')))
app.use(express.static(path.join(__dirname, 'public/js/')))

app.get("/",function(request, response){
    response.sendFile(__dirname + "/public/html/index.html");

})

  
app.post("/form",  jsonParser ,function (request, response) {
    console.log(request.body);
    if(!request.body) return response.sendStatus(400);
     
    response.json(request.body); // отправляем пришедший ответ обратно
});
  
app.get("/form",function(request, response){
      
    response.sendFile(__dirname + "/public/html/form.html");
});
  
app.listen(3000);