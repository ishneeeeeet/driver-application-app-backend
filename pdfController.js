const path = require("path");
const pdfTemplate = require("./document");
const nodemailer = require("nodemailer");
const fs = require("fs");
const puppeteer = require('puppeteer')
const { getChrome } = require('./chrome-script')

exports.createPdf = async (req, res) => {
  const chrome = await getChrome()

  // launch a new chrome instance
  const browser = await puppeteer.connect({
    browserWSEndpoint: chrome.endpoint
  });

  // create a new page
  const page = await browser.newPage()

  // set your html as the pages content
  const html = await pdfTemplate(req.body)
  await page.setContent(html, {
    waitUntil: 'domcontentloaded'
  })


  const timeStamp = Date.now()
  const filePath = `/tmp/driverApplication-` + timeStamp + `.pdf`

  // or a .pdf file
  const pdf = await page.pdf({
    format: 'A4',
    path: filePath
  })

  res.set({ 'Content-Type': 'application/pdf', 'Content-Length': pdf.length })
  res.send(pdf)

  // close the browser
  await browser.close()

  // await sendPdf(filePath)

};


const sendPdf = async (filePath) => {
  const pathToAttachment = path.join(__dirname, filePath);
  const attachment = fs.readFileSync(pathToAttachment);

  let transporter = await nodemailer.createTransport({
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

  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email:", error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent successfully:", info.response);
      res.status(200).send("Email sent successfully");
    }
  });
  console.log("Email Sent")

  fs.rmSync(filePath)
  console.log("File deleted")
};
