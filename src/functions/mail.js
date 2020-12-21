const sgMail = require("@sendgrid/mail");

exports.handler = async function (evt, ctx) {
  console.log("body received", evt.body);
  const { name, mail, message } = JSON.parse(evt.body);
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: "support@vanickel.com",
    from: "support@vanickel.com",
    subject: "Got a message from vanickel.com",
    text: `
      name: ${name}
      
      mail: ${mail}

      message: ${message}
    `,
    html: `
    <div> 
      <strong>Name</strong> ${name}
    </div>
    <div>
      <strong>Mail</strong> ${mail}
    </div>
    <div>
      <strong>Message</strong> ${message}
    </div>
    `,
  };

  sgMail
    .send(msg)
    .then((resp) => {
      console.log("Email Sent", resp);
    })
    .catch((err) => {
      console.error("Error in sending mail", err);
    });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Mail Sent" }),
  };
};
