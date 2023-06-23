const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_KEY);
require("dotenv").config();

const { SENDGRID_KEY } = process.env;

sgMail.setApiKey(SENDGRID_KEY);

function getMessage() {
  const body = "This is a test email using SendGrid from Node.js";
  return {
    to: "tatyana080489t@gmail.com",
    from: "vutivaku@gmail.com",
    subject: "Test email with Node.js and SendGrid",
    text: body,
    html: `<strong>${body}</strong>`,
  };
}

async function sendEmail() {
  try {
    await sgMail.send(getMessage());
    console.log("Test email sent successfully");
  } catch (error) {
    console.error("Error sending test email");
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }
  }
}

(async () => {
  console.log("Sending test email");
  await sendEmail();
})();
