const {Bamboo} = require('../models/bamboo');
const nodemailer = require('nodemailer');
const { mjml2html } =require('mjml')
const htmlOutput =require('../email/welcomeEmail')
var googleAuth = require('google-oauth-jwt')
const axios = require('axios')

const keyFile = process.env.GOOGLE_KEY ? process.env.GOOGLE_KEY : '../../key.pem'

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
        user: 'shutch@p3i-inc.com',
        pass: 'Woodbird966'
    }
});





const tokenPromise = ()=>{
  return new Promise((resolve,reject)=>{
    googleAuth.authenticate({
       // use the email address of the service account, as seen in the API console
       email: 'new-directory@appraisal-158816.iam.gserviceaccount.com',
       delegationEmail: "shutch@p3i-inc.com",
       // use the PEM file we generated from the downloaded key
       key: keyFile,
       // specify the scopes you wish to access
       scopes: ['https://www.googleapis.com/auth/admin.directory.user']
    }, function (err, token) {
      if(token){
        resolve(token)
      }
      if (err){
        reject(err)
      }
    })
  })
}
exports.getUsers = (req, res, next)=> {
  Bamboo.find({}).then((users)=>{
    res.send({users})
  }, (e) =>{
    res.status(400).send(e)
  });
}

exports.test = (req, res, next)=> {
  let employee = req.body.employees[0]
  const empNum = employee.fields["Employee #"]
  const firstName = employee.fields["First Name"]
  const lastName =  employee.fields["Last Name"]
  const personalEmail = employee.fields["Home Email"]
  const workEmail = employee.fields["Work Email"]
  employee.empNum = empNum
  const empData = {
    empNum,
    firstName,
    lastName,
    personalEmail,
    workEmail,
    emailAdded: false
  }
  let emailHtml = htmlOutput(empData)
  console.log(emailHtml)
  let mailOptions = {
      from: '"P3I Onboarding Team" <shutch@p3i-inc.com>', // sender address
      to: personalEmail, // list of receivers
      cc: "smhutch@p3i-inc.com",
      subject: 'Welcome to the P3I Team', // Subject line
      html: emailHtml.html // html body
  };
  const emailPromise = () =>{
    return new Promise((resolve,reject)=>{
      transporter.sendMail(mailOptions, (error,info)=>{
        if(error){
          reject(error)
          return
        }
        resolve(info)
      })
    })
  }

  const makeRequest = async ()=>{
    try {
      const currentUser = await Bamboo.findOne({empNum: empNum})
      if (!currentUser){
        console.log("no user carry on")
        const token = await tokenPromise()
        console.log(token)
        const googleUser = await axios({
                 method:'post',
                 //url:'https://www.googleapis.com/admin/directory/v1/users?domain=p3i-inc.com&query=orgUnitPath:/Employees&maxResults=500',
                 url:'https://www.googleapis.com/admin/directory/v1/users',
                 data:{
                   name: {
                     familyName: lastName,
                     givenName: firstName
                   },
                   password: 'p3ipassword',
                   changePasswordAtNextLogin: true,
                   primaryEmail: workEmail,
                 },
                 headers: {Authorization: `Bearer ${token}`}
               })
        console.log(googleUser.data)
        empData.emailAdded = true
        const bamboo = new Bamboo(empData);
        const newEmp = await bamboo.save()
        console.log(newEmp)
        const email = await emailPromise()
        console.log("all is good")
        res.send(newEmp)
      }
      else {
        console.log("user already exists")
        return res.send("user already exists")
      }

    }
    catch(err){
      console.log("caught error, gmail not added")
      res.send("caught error, gmail not added")
    }

  }
  makeRequest()
}
  // Check if employee with number already exists
//   Bamboo.findOne({empNum: empNum}).then((emp)=>{
//     if(emp){
//       // If already exists do nothing
//       console.log("employee already exists")
//       return res.send("employee already exists")
//     }
//     // If doesnt exist add google account
//     googleAuth.authenticate({
//        // use the email address of the service account, as seen in the API console
//        email: 'new-directory@appraisal-158816.iam.gserviceaccount.com',
//        delegationEmail: "shutch@p3i-inc.com",
//        // use the PEM file we generated from the downloaded key
//        keyFile: keyFile,
//        // specify the scopes you wish to access
//        scopes: ['https://www.googleapis.com/auth/admin.directory.user']
//     }, function (err, token) {
//      if(err){
//        console.log("google auth error")
//        const bamboo = new Bamboo(empData);
//        return res.send(err)
//      }
//
//
//      if(token){
//        console.log("token receieved")
//
//        axios({
//          method:'post',
//          //url:'https://www.googleapis.com/admin/directory/v1/users?domain=p3i-inc.com&query=orgUnitPath:/Employees&maxResults=500',
//          url:'https://www.googleapis.com/admin/directory/v1/users',
//          data:{
//            name: {
//              familyName: firstName,
//              givenName: lastName
//            },
//            password: 'p3ipassword',
//            primaryEmail: email,
//          },
//          headers: {Authorization: `Bearer ${token}`}
//        })
//        .then((response)=>{
//          empData.emailAdded = true
//          const bamboo = new Bamboo(empData);
//          //bamboo.save()
//          bamboo.save().then((doc) => {
//            console.log("all is good")
//            res.send(doc);
//          }, (e) => {
//            console.log("couldnt save document")
//            res.status(400).send(e);
//          });
//        }, (e) =>{
//          // create entry but email didnt get added
//          empData.emailAdded = false
//          const bamboo = new Bamboo(empData);
//          bamboo.save().then((doc) => {
//            console.log("couldnt add google email")
//            res.send("couldnt add google email");
//          }, (e) => {
//            console.log("couldnt add google email or add data to datababse")
//            res.status(400).send(e)
//          });
//
//        })
//        //end axios
//       }
//       //end Google request
//     })
//   })
// }



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
