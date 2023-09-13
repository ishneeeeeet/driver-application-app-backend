const { log } = require("console");
const pdf = require("html-pdf");
const path = require("path");
const pdfTemplate = require("./document");
const nodemailer = require("nodemailer");
const fs = require("fs");

exports.createPdf = (req, res) => {
  pdf.create(pdfTemplate(req.body), {phantomPath: "./node_modules/phantomjs-prebuilt/bin/phantomjs"}).toFile("driverApplication.pdf", (err) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error generating PDF");
    } else {
      console.log("PDF generated successfully");
      res.status(200).send("PDF generated");
    }
  });
};

exports.fetchPdf = (req, res) => {
  res.sendFile(path.join(__dirname, "driverApplication.pdf"));
};

exports.sendPdf = (req, res) => {
  const pathToAttachment = path.join(__dirname, "driverApplication.pdf");
  const attachment = fs.readFileSync(pathToAttachment);

  let transporter = nodemailer.createTransport({
    // Replace these options with your actual SMTP server details
    host: "smtp.gmail.com",
    service: 'Gmail',
    port: 465,
    secure: false,
    auth: {
      user: 'ishneet100@gmail.com',
      pass: 'qyrmewejfidinkhf',
    },
  });

  const mailOptions = {
    from: "admin@primeztrucking.ca", // Sender address
    to: "admin@primeztrucking.ca", // List of recipients
    subject: `New Driver Application`, // Subject line
    text: "Please find the attached pdf.", // Plain text body
    attachments: [
      {
        filename: "driverApplication.pdf",
        content: attachment,
        contentType: 'application/pdf',
        disposition: 'attachment'
      },
    ],
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email:", error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent successfully:", info.response);
      res.status(200).send("Email sent successfully");
    }
  });
};
