require("dotenv").config();
const nodemailer = require("nodemailer");
const he = require("he");

const sendWelcomeMail = async (data) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const escapedHtml = he.encode(data?.html);

  const mailOptions = {
    from: process.env.MAIL_USER,
    to: data?.email,
    subject: ``,
    html: `
    <body style="background-color: white; margin: 0; padding: 0;">
    <div style="padding: 10px">
    <h1
    style="font-size: 16px; text-align: center;  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">
    Your Source Code</h1>
      <div style="max-width: 600px; width: 100%; margin: 0 auto; font-family: 'Cabin',sans-serif; text-align:center; background-color: #ffff;">
        <div
        style="background-color: black; color: white; max-width: 500px; margin: 0 auto; width:100%; height:300px; overflow-y: auto; border-radius: 15px; padding:7px">
        <pre>${escapedHtml}</pre>
    </div>
      </div>
    </div>
    
    </body>
  `,
  };

  let status = true;
  transporter.sendMail(mailOptions, (error, info) => {
    if (info) {
      status = true;
    }
    if (error) {
      status = false;
    }
  });
  return status;
};

module.exports = {
  sendWelcomeMail,
};
