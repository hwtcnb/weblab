const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
  
const app = express();

const urlencoded = bodyParser.urlencoded({extended: false});

app.use(express.static(path.join(__dirname, 'public/css/')))
app.use(express.static(path.join(__dirname, 'public/js/')))

// создаем парсер для данных в формате json

  
app.post("/", urlencoded, function (request, response) {
    console.log(request.body);
    if(!request.body) return response.sendStatus(400);
     
    response.send(request.body.name); // отправляем пришедший ответ обратно
});
  
app.get("/", function(request, response){
      
    response.sendFile(__dirname + "/public/html/form.html");
});
  
app.listen(3000);