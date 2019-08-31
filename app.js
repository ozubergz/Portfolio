require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const nodemailer= require('nodemailer');

app.use("/public", express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.post("/contact", function(req, res) {
  let email = req.body.email,
      subject = req.body.subject,
      message = req.body.message;

  let output = `
    <h4>New Contact</h4>
    <ul>
      <li>From: ${email}</li>
      <li>Subject: ${subject}</li>
    </ul>
    <h4>Message: </h4>
    <p>${message}</p>
  `

  // async..await is not allowed in global scope, must use a wrapper
  async function main() {

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: `${process.env.USER_EMAIL}`, // generated ethereal user
        pass: `${process.env.PASSWORD}` // generated ethereal password
      }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `Business Contact <${process.env.PRIVATE_EMAIL}>`, // sender address
      to: `${process.env.USER_EMAIL}`, // list of receivers
      subject: `${subject}`, // Subject line
      text: 'New Message', // plain text body
      html: output // html body
    });

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    console.log('Message sent: %s', info.messageId);

    // console.log(info.accepted.length)
    if(info.accepted.length > 0) {
      
    } else {
      
    }
    
  }

  main().catch(console.error);

});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server is listening on port 3000")
});