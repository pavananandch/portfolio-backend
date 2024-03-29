const visitorsModel = require('../models/visitors.model');
const autoResponseEmailTemplate = require('../public/templates/autoResponseEmailTemplate');

var nodemailer = require('nodemailer');
var smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.user,
        pass: process.env.pass
    }
};
var transporter = nodemailer.createTransport(smtpConfig);


insertData = (req, res) => {
    console.log(req.body);
    visitorsModel.create(req.body, (err, result) => {
        if (err) {
            // console.log("error: ", err);
            res.send(err);
        } else {
            var mailOptions = {
                from: '"Pavan Anand Chinthalapudi" <saipavan.anand@gmail.com>',
                to: req.body.email,
                bcc: 'saipavan.anand@gmail.com',
                subject: 'Thank you for your response.',
                html: autoResponseEmailTemplate.emailTemplate(req.body)
              };

              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                  res.send(result);
                }
              });
        }
    })
}

getData = (req, res) => {
    visitorsModel.find({}, (err, docs) => {
        res.send({
            status: true,
            data: docs
        })
    })
}

module.exports = {
    insertData: insertData,
    getData: getData
}