
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
const admin = require('firebase-admin');
const CryptoJS = require('crypto-js');
/// <reference types="crypto-js" />
// Habilitar en gmail:
// 1. https://www.google.com/settings/security/lesssecureapps
// 2. https://accounts.google.com/DisplayUnlockCaptcha
admin.initializeApp(functions.config());
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

exports.sendZamyWelcomeEmail = functions.firestore.document('mails/{mailId}')
    .onCreate(event => {
        const mailData = event.data();
        console.log('email: ' + mailData.email);
        sendWelcomeEmail(mailData.email, mailData.firstName, mailData.subject, mailData.body);
    });

exports.createNewUser = functions.firestore.document('users/{userId}').onUpdate((change, context) => {
    if (change.after.data().status === 1 && change.before.data().status === 0) {
        return admin.auth().createUser({
            email: change.after.data().email,
            password: CryptoJS.AES.decrypt(change.after.data().password, '1223298293233').toString(CryptoJS.enc.Utf8)
        }).then(() =>
            console.log("Successfully created new user:")
        ).catch(error =>
             console.log("Error creating new user:", error)
        );
    }
});

function sendWelcomeEmail(email, firstName, subject, body) {
    const mailOptions = {
        from: `Zamy Club <noreply@zamy.com>`,
        to: email,
        subject: subject,
        html: body.replace('{{firstName}}', firstName)
    };
    return mailTransport.sendMail(mailOptions).then(() => {
        return console.log('email sent to:', email);
    }).catch(err => { return console.log('error: ' + err); });
}

