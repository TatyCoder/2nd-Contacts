var express = require("express");
var app = express();
app.use(express.static('Public'));
app.get ("/savecontacts", function (req,res){
	res.send ("Hello");
});
app.listen(3000);