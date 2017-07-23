const {Bamboo} = require('../models/bamboo');
const nodemailer = require('nodemailer');
const { mjml2html } =require('mjml')
const axios = require('axios')
const googleAuth = require('google-oauth-jwt');
const jwt = require('jsonwebtoken');
const config = require('../../config');

exports.test = (req, res, next)=> {
  //get auth token from google API
  const currentTime = Math.floor(Date.now()/1000)
  const expire = Math.floor(Date.now() / 1000) + (60 * 60)
  const apiKey = config.googleApi.private_key
  const payload  = {
    "iss": "new-directory@appraisal-158816.iam.gserviceaccount.com" ,
    "sub": "shutch@p3i-inc.com",
    "scope":"https://www.googleapis.com/auth/admin.directory.user",
    "aud":"https://www.googleapis.com/oauth2/v4/token",
    "exp": expire,
    "iat": currentTime
  }
  const token = jwt.sign(payload, apiKey, { algorithm: 'RS256'});
  res.send(token)
};









// const payload  = {
//   "iss": config.googleApi.client_email ,
//   "sub": "shutch@p3i-inc.com",
//   "scope":"https://www.googleapis.com/auth/admin.directory.user",
//   "aud":"https://www.googleapis.com/oauth2/v4/token",
//   "exp": expire,
//   "iat": currentTime
// }
// const token = jwt.sign(payload, apiKey, { algorithm: 'RS256'});
