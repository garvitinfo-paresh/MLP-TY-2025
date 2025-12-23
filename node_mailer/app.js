const nodemailer = require("nodemailer");

// let configOptions = {
//     host: 'smtp.example.com',
//     port: 587,
//     tls: {
//         rejectUnauthorized: true,
//         minVersion: 'TLSv1.2'
//     }
// };

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "dninfo.paresh@gmail.com",
    pass: "",
  },
});

// let mailOptions ={
//     from:'----from----@gmail.com',
//     to:'----to---@gmail.com',
//     subject:"Sending Test Email",
//     text:"Testing NodeMailer",
//     html: '<h1>Your password is </h1><p>123456</p>',
//     attachments: [
//         { filename: 'txt.txt', path: './txt.txt' }
//      ]
// }

let mailOptions = {
  from: "dninfo.paresh@gmail.com",
  to: "urjapancholi@gmail.com",
  subject: "Sending Test Email",
  text: "Testing NodeMailer",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email Send " + info.response);
  }
});
