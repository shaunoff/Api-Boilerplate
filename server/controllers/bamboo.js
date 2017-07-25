const {Bamboo} = require('../models/bamboo');
const nodemailer = require('nodemailer');
const { mjml2html } =require('mjml')
var googleAuth = require('google-oauth-jwt')
const axios = require('axios')

// let transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true, // secure:true for port 465, secure:false for port 587
//     auth: {
//         user: 'shutch@p3i-inc.com',
//         pass: 'Woodbird966'
//     }
// });
//
// let mailOptions = {
//     from: '"Fred Foo 👻" <foo@blurdybloop.com>', // sender address
//     to: 'shutch@p3i-inc.com', // list of receivers
//     subject: 'Hello ✔', // Subject line
//     text: 'Hello world ?', // plain text body
//     html: "gsfhjdfghjdfghjdfghjdfsgjhdfs" // html body
// };

const keyFile = process.env.GOOGLE_KEY ? process.env.GOOGLE_KEY : '../../key.pem'

exports.test = (req, res, next)=> {
  let employee = req.body.employees[0]
  const empNum = employee.fields["Employee #"]

  employee.empNum = empNum
  Bamboo.findOne({empNum: empNum}).then((emp)=>{
    // Check if employee with number already exists
    if(emp){
      // If already exists do nothing
      console.log("employee already exists")
      return res.send("employee already exists")
    }
    // If doesnt exist add google account
    googleAuth.authenticate({
       // use the email address of the service account, as seen in the API console
       email: 'new-directory@appraisal-158816.iam.gserviceaccount.com',
       delegationEmail: "shutch@p3i-inc.com",
       // use the PEM file we generated from the downloaded key
       key: keyFile,
       // specify the scopes you wish to access
       scopes: ['https://www.googleapis.com/auth/admin.directory.user']
    }, function (err, token) {
     if(err){
       console.log("google auth error")
       // need to add to database but no google
       return res.send(err)
     }


     if(token){
       console.log("token receieved")
       const firstName = employee.fields["First Name"]
       const lastName =  employee.fields["Last Name"]
       const email = employee.fields["Work Email"]
       axios({
         method:'post',
         //url:'https://www.googleapis.com/admin/directory/v1/users?domain=p3i-inc.com&query=orgUnitPath:/Employees&maxResults=500',
         url:'https://www.googleapis.com/admin/directory/v1/users',
         data:{
           name: {
             familyName: firstName,
             givenName: lastName
           },
           password: 'p3ipassword',
           primaryEmail: email,
         },
         headers: {Authorization: `Bearer ${token}`}
       })
       .then((response)=>{

         const bamboo = new Bamboo({
             empNum: empNum,
             firstName: firstName,
             lastName: lastName,
             emailAdded: true
         });
         bamboo.save()
         res.send("all successful")
       }, (e) =>{
         // create entry but email didnt get added
         const bamboo = new Bamboo({
             empNum: empNum,
             firstName: firstName,
             lastName: lastName,
             emailAdded: false
         });
         bamboo.save()
         res.send("couldnt add google email")
       })
       //end axios
      }
      //end Google request
    })
  })
}



  //
  //   res.send("success")
  // }, (e) =>{
  //   res.status(400).send()
  // });

  // const bamboo = new Bamboo({
  //     data: req.body.data.employees[0].fields
  // });
  // bamboo.save()
  //res.send("data received")
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
