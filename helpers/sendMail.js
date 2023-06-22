// const sgMail = require("@sendgrid/mail");
// sgMail.setApiKey(process.env.SENDGRID_KEY);
// // require("dotenv").config();

// const { SENDGRID_KEY } = process.env;

// sgMail.setApiKey(SENDGRID_KEY);

// const sendEmail = async (data) => {
//   const email = { ...data, from: "vutivaku@gmail.com" };
//   await sgMail.send(email);
// };

// module.exports = sendEmail;
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_KEY);
const msg = {
  to: "tatyana080489t@gmail.com", // Change to your recipient
  from: "vutivaku@gmail.com", // Change to your verified sender
  subject: "Sending with SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};
sgMail
  .send(msg)
  .then(() => {
    console.log("Email sent");
  })
  .catch((error) => {
    console.error(error);
  });
