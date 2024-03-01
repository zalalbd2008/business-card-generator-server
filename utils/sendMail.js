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
    subject: `EMAIL SIGNATURE`,
    html: `
    <body style="width: 100%; background-color: white; padding: 0; margin: 0; color: black;">
    <div
        style="max-width: 850px; background-color: white; padding: 10px; font-family: 'Cabin', sans-serif;">
        <p style="font-family: 'Cabin', sans-serif; font-weight: 700;">Dear Sir/ Madam,</p>
        <p style="font-family: 'Cabin', sans-serif; padding: 0; margin: 0;">
            Greetings from Logo
            In Hours LLC.
        </p>
        <p style="font-family: 'Cabin', sans-serif;  padding: 0; margin: 0;">
            Please find the code for EMAIL SIGNATURE
        </p>

        <div
            style="max-width: 600px; width: 100%; font-family: 'Cabin',sans-serif; text-align:center; margin-top: 15px;">
            <div
                style="background-color: black; color: white; max-width: 500px;  width:100%; height:200px; overflow-y: auto; border-radius: 7px; padding:7px">
                <pre>${escapedHtml}</pre>
            </div>
        </div>
        <p
            style="font-family: 'Cabin', sans-serif;  padding: 0; margin: 0; font-weight: 600; margin-top: 10px;">
            Once the signature is added to your email, it will look like below
        </p>


        <img src="${data?.temp_img}" width="400" height="300" alt="template image" style="margin-top: 20px;" />

        <div style="margin-top: 20px;">

            <h3
                style="color: orangered; font-family: 'Cabin', sans-serif;  padding: 0; margin: 0; font-weight: 600; margin-top: 10px; margin-bottom: 12px;">
                EMAIL SIGNATURE
            </h3>

            <p
                style="font-family: 'Cabin', sans-serif;  padding: 0; margin: 0; font-size: medium;">
                For Online Gmail/Gsuite =
                <a href="https://www.youtube.com/watch?v=zdqz3BilJDY&t=2s" target="_blank"
                    style="color: black; text-decoration-color: blue; font-size: medium; font-style: normal; font-weight: 400;">https://www.youtube.com/watch?v=zdqz3BilJDY&t=2s</a>
            </p>
            <p
                style="font-family: 'Cabin', sans-serif;  padding: 0; margin: 0; font-size: medium;">
                For Windows Outlook =
                <a href="https://www.youtube.com/watch?v=zdqz3BilJDY&t=2s" target="_blank"
                    style="color: black; text-decoration-color: blue; font-size: medium; font-style: normal; font-weight: 400;">https://www.youtube.com/watch?v=zdqz3BilJDY&t=2s</a>
            </p>
            <p
                style="font-family: 'Cabin', sans-serif;  padding: 0; margin: 0; font-size: medium;">
                For Mac Outlook =
                <a href="https://www.youtube.com/watch?v=9-iaW9vwRRQ&t=3s" target="_blank"
                    style="color: black; text-decoration-color: blue; font-size: medium; font-style: normal; font-weight: 400;">https://www.youtube.com/watch?v=9-iaW9vwRRQ&t=3s</a>
            </p>
            <p
                style="font-family: 'Cabin', sans-serif;  padding: 0; margin: 0; font-size: medium;">
                For MacMail App =
                <a href="https://www.youtube.com/watch?v=x3RhIAxIslY&t=240s" target="_blank"
                    style="color: black; text-decoration-color: blue; font-size: medium; font-style: normal; font-weight: 400;">https://www.youtube.com/watch?v=x3RhIAxIslY&t=240s</a>
            </p>
            <p
                style="font-family: 'Cabin', sans-serif;  padding: 0; margin: 0; font-size: medium;">
                For IPhone/IPad =
                <a href="https://www.youtube.com/watch?v=YE0-A5bvYt8&t=7s" target="_blank"
                    style="color: black; text-decoration-color: blue; font-size: medium; font-style: normal; font-weight: 400;">https://www.youtube.com/watch?v=YE0-A5bvYt8&t=7s</a>
            </p>
            <p
                style="font-family: 'Cabin', sans-serif;  padding: 0; margin: 0; font-size: medium;">
                For Zoho mail =
                <a href="https://www.youtube.com/watch?v=S6XvOvi-fHA" target="_blank"
                    style="color: black; text-decoration-color: blue; font-size: medium; font-style: normal; font-weight: 400;">https://www.youtube.com/watch?v=S6XvOvi-fHA</a>
            </p>


            <p style="font-family: 'Cabin', sans-serif;  padding: 0; margin-top: 30px;">
                We have successfully designed over 200 business websites, significantly contributing to the growth of
                numerous small businesses through our expert Search Engine Optimization (SEO) services. Our team is
                committed to building your local reputation, managing reviews, and optimizing your Google My Business
                page
                to ensure you are easily found with the 'BUSINESS NEAR ME' search query. Also, we specialize in fixing
                existing website errors and improving your online presence further. You can learn more about how we can
                help
                you at <a href="https://www.fixwebsiteissues.com/" target="_blank"
                    style="color: blue; text-decoration: none; font-style: normal; font-weight: 400;">Fix Website
                    Issues.</a>
            </p>
            <p style="font-family: 'Cabin', sans-serif;  padding: 0; margin-top: 30px;">
                Logo In Hours LLC is honored to offer our services to help achieve your business objectives. Visit us at
                <a href="https://www.logoinhours.com/" target="_blank"
                    style="color: blue; text-decoration: none; font-style: normal; font-weight: 400;">Logo In Hours</a>
                LLC to discover how we can support your journey towards success.
            </p>


            <div style="border-top: 1px solid gray; width: fit-content; padding-top: 5px; margin-top: 20px;">
                <p style="font-family: 'Cabin', sans-serif;  padding: 0; margin: 0;">
                    Zhee- Sr. Designer
                </p>
                <p
                    style="font-family: 'Cabin', sans-serif;  padding: 0; font-weight: 700; margin: 0; font-size: 18px;">
                    Logo In Hours LLC
                </p>
                <img src="https://lh3.googleusercontent.com/-mFltO_5usIws1_2W4OaolIrY1XPU-3OBsbew90dSdI8l3XZQA9xAi-0L-gS01dP32sO-Zop9eJIVrM6iglUEk1cDlD2aTRLcckD-v3O-YuSKCl9VmFYtqwMNWN3cfO-USBWQ_H1"
                    alt="logo" width="150" height="60" style="margin-top: 20px;" />


                <p
                    style="font-family: 'Cabin', sans-serif;  padding: 0; font-weight: 600; margin-top: 10px;">
                    INSURED | 100% Satisfaction | Serving Nationwide
                </p>



                <p
                    style="font-family: 'Cabin', sans-serif;  padding: 0; margin: 0; font-size: medium; font-weight: 600;">
                    24/7:
                    <a href="tel:+1-(832)-736-7335" target="_blank"
                        style="color: orangered; text-decoration: none; font-size: medium; font-style: normal; font-weight: 400;">+1-(832)-736-7335</a>
                </p>
                <p
                    style="font-family: 'Cabin', sans-serif;  padding: 0; margin: 0; font-size: medium; font-weight: 600;">
                    Email:
                    <a href="mailto:info@logoinhours.com" target="_blank"
                        style="color: orangered; text-decoration: none; font-size: medium; font-style: normal; font-weight: 400;">info@logoinhours.com</a>
                </p>


                <p
                    style="font-family: 'Cabin', sans-serif;  padding: 0; font-weight: 600; margin-top: 10px;">
                    Logo | Banner | Flyer | Magnet | Website | Digital Marketing
                </p>
                <p
                    style="font-family: 'Cabin', sans-serif;  padding: 0; font-weight: 600; margin-top: 10px;">
                    <a href="https://www.portfolio.logoinhours.com/branding/" target="_blank"
                        style="color: orangered; text-decoration-color: orangered;">Branding
                        Portfolio</a> | <a href="https://www.portfolio.logoinhours.com/awesome-design/" target="_blank"
                        style="color: orangered; text-decoration-color: orangered;">Website Portfolio -1</a> | <a
                        href="https://www.portfolio.logoinhours.com/basic-website-design/" target="_blank"
                        style="color: orangered; text-decoration-color: orangered;">Website Portfolio -2</a>
                </p>


                <p style="font-family: 'Cabin', sans-serif;  padding: 0; margin-top: 30px;">
                    <span style="font-weight: 600;">Disclaimer:</span> The content of this email is confidential and
                    intended for the recipient specified in
                    the
                    message only. It is strictly forbidden to share any part of this message with any third party,
                    without
                    the written consent of the sender. If you received this message by mistake, please reply to this
                    message
                    and follow with its deletion so that we can ensure such a mistake does not occur in the future.
                </p>
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

const sendTicketMail = async (data) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.MAIL_USER,
    to: data?.email,
    subject: `Ticket`,
    html: `
    <body
    style="background-color: rgba(212, 208, 208, 0.625); margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif">
    <div style="background-color: white; height: 100vh; max-width: 700px; margin:0 auto;">
        <div style=" height: fit-content; cursor: pointer; max-width: 600px; margin:0 auto;padding-top: 100px;">
            <div style="width: 100%; background-color: orange; border-radius: 5px; ">
                <h3
                    style="text-align: center; font-weight: 700; text-transform: uppercase; color: white; margin:0px ; padding: 15px 0px;">
                    Ticket Information</h3>
            </div>

            <p
                style="font-size: 20px; text-align: center; font-weight: 700; color: rgba(16, 15, 15, 0.873); padding-top: 8px; margin:0px">
                Thank you for purchasing a ticket. Here are the details</p>


            <p style="margin-top: 50px; text-align: center; display: block; padding-top: 8px;">
                <span
                    style="font-size: 20px; font-weight: 700; color: rgba(16, 15, 15, 0.873);  margin:0px; padding-right: 10px; display: inline;">
                    Email:</span>
                <span
                    style="font-size: 20px; font-weight: 500; color: rgba(16, 15, 15, 0.873); margin:0px;display: inline;">
                    ${data?.email}</span>
            </p>
            <div
                style="width: 100%; border-radius: 4px; border: 1px solid rgba(128, 128, 128, 0.635); margin-top: 20px; padding: 15px 0; text-align: center;">
                <span
                    style="font-size: 20px; text-align: center; font-weight: 700; color: rgba(16, 15, 15, 0.873);  margin:0px; display: inline;">
                    Code:</span>
                <span
                    style="font-size: 20px; text-align: center; font-weight: 500; color: rgba(16, 15, 15, 0.873);  margin:0px; display: inline;">
                    ${data?.code}</span>
            </div>

            <a href=${data?.url} target="_blank"
                style="display: block; width: 130px; height: 35px; background-color: orange; border: none; border-radius: 3px; color:white; text-decoration: none; line-height: 35px; margin: 20px auto; text-align:center">Use
                Ticket <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                    stroke="currentColor" style="width: 20px; height: 15px;">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3" />
                </svg>
            </a>
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
  sendTicketMail,
};
