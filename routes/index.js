var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/astral', function(req, res, next) {
  res.render('astral');
});

router.get('/finolex', function(req, res, next) {
  res.render('finolex');
});

router.get('/skipper', function(req, res, next) {
  res.render('skipper');
});

router.get('/kisan', function(req, res, next) {
  res.render('kisan');
});
router.get('/contact', function(req, res, next) {
  res.render('Contact');
});

router.get('/fileupload', function(req, res, next) {
  res.render('fileupload');
});
  
router.post('/fileupload',function(req,res,next){

console.log(req.files.sampleFile);
var myfile = req.files.sampleFile;

var myfilename = myfile.name;

console.log("file:"+myfile+"File Name: "+myfilename);

myfile.mv("public/upload/"+myfilename, function(err){

  if(err){
    return res.status(500).send(err);

  }

})
res.redirect('/');

});

router.post('/contact', function(req, res, next) {
  var a = req.body.fname;
  var b = req.body.lname;
  var c = req.body.ename;
  var d = req.body.uname;
  var e = req.body.cname;
const nodemailer = require('nodemailer');

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
nodemailer.createTestAccount((err, account) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
          user: "hp529351@gmail.com", // generated ethereal user
          pass: "......." // generated ethereal password
      }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: '"Gangotrai Sanitary" <hrp1501998@gmail.com>', // sender address
      to:'hrp1501998@gmail.com', // list of receivers
      subject:a, // Subject line
      text:b, // plain text body
      html: '<b>Frist Name:</b></br>'+a+ 
      '<b>Last Name:</b></br>'+b+
      '<b>Email Id:</b>'+c+'<b>Address:</b>'+d+'<b>Feed Back:</b>'+e // html body
  };
  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  });
});
res.redirect("/");
});
module.exports = router;

function newFunction() {
  return '/fileupload';
}

