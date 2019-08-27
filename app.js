const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use("/public", express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.post("/contact", function(req, res) {
  let email = req.body.email,
      subject = req.body.subject,
      message = req.body.message;

  console.log(email, subject, message)
  
  
});

app.listen(3000, function() {
  console.log("Server is listening on port 3000")
});