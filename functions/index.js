
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
// Habilitar en gmail:
// 1. https://www.google.com/settings/security/lesssecureapps
// 2. https://accounts.google.com/DisplayUnlockCaptcha
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
        user: gmailEmail,
        pass: gmailPassword,
    },
}));

const APP_NAME = 'Zamy Club';

exports.sendZamyWelcomeEmail = functions.firestore.document('mails/{mailId}')
    .onCreate(event => {
        const mailData = event.data();
        console.log('email: ' + mailData.email);
        sendWelcomeEmail(mailData.email, mailData.firstName);
    });

function sendWelcomeEmail(email, firstName) {
    const mailOptions = {
        from: `${APP_NAME} <noreply@zamy.com>`,
        to: email,
    };

    mailOptions.subject = `Bienvenido(a) a ${APP_NAME}!`;
    mailOptions.text = `Hola ${firstName || ''}! Te damos la bienvenida a ${APP_NAME}. I hope you will enjoy our service.`;
    return mailTransport.sendMail(mailOptions).then(() => {
        return console.log('email sent to:', email);
    }).catch(err => { return console.log('error: ' + err); });
}

