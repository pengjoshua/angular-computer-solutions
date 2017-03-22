let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(express.static(__dirname));          
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());

app.listen(8080);
console.log("App listening on port 8080");
