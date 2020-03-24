var express = require("express");
var app = express();
app.use(express.static('Public'));

var contacts = require('./Public/Contacts.js');

app.get ("/addcontact", function (req,res){
	console.log(req.query);
	console.log(contacts);

	var newcontact = {};
	newcontact.name = req.query.name;
	newcontact.address={};
	newcontact.address.street = req.query.street;
	newcontact.address.city = req.query.city;
	newcontact.address.zip = req.query.zip;
	newcontact.phone = req.query.phone;
	contacts.push(newcontact);
	console.log(contacts);

	res.send ("New Contact is Saved");
});

app.listen(3000);