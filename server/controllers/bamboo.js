const {Bamboo} = require('../models/bamboo');
const nodemailer = require('nodemailer');
const { mjml2html } =require('mjml')
var googleAuth = require('google-oauth-jwt')
const axios = require('axios')

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
        user: 'shutch@p3i-inc.com',
        pass: 'Woodbird966'
    }
});

let mailOptions = {
    from: '"Fred Foo 👻" <foo@blurdybloop.com>', // sender address
    to: 'shutch@p3i-inc.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plain text body
    html: "gsfhjdfghjdfghjdfghjdfsgjhdfs" // html body
};

const keyFile = process.env.GOOGLE_KEY ? process.env.GOOGLE_KEY : '../../key.pem'

exports.test = (req, res, next)=> {
  const empNum = req.body.data
  console.log(empNum)
  // const bamboo = new Bamboo({
  //     data: req.body.data.employees[0].fields
  // });
  // bamboo.save()
  res.send("data received")
//   googleAuth.authenticate({
//   // use the email address of the service account, as seen in the API console
//   email: 'new-directory@appraisal-158816.iam.gserviceaccount.com',
//   delegationEmail: "shutch@p3i-inc.com",
//   // use the PEM file we generated from the downloaded key
//   key: keyFile,
//   // specify the scopes you wish to access
//   scopes: ['https://www.googleapis.com/auth/admin.directory.user']
// }, function (err, token) {
//   if(err){
//     console.log(err)
//   }
//   if(token){
//     console.log(req.body)

    // axios({
    //   method:'post',
    //   //url:'https://www.googleapis.com/admin/directory/v1/users?domain=p3i-inc.com&query=orgUnitPath:/Employees&maxResults=500',
    //   url:'https://www.googleapis.com/admin/directory/v1/users',
    //   data:{
    //     name: {
    //       familyName: "Fintstone",
    //       givenName: "Fred"
    //     },
    //     password: 'p3ipassword',
    //     primaryEmail: 'fflintsone@p3i-inc.com',
    //   },
    //   headers: {Authorization: `Bearer ${token}`}
    // })
    // .then(function(response) {
    //   const bamboo = new Bamboo({
    //     data: response.data
    //   });
    //   bamboo.save().then((doc) => {
    //     transporter.sendMail(mailOptions, (error, info) => {
    //       if (error) {
    //           return console.log(error);
    //       }
    //       res.send(doc);
    //     });
    //     console.log("document recieved")
    //
    //   }, (e) => {
    //     console.log(e);
    //   });
    // });
  // }


// });





}
