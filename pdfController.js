const pdfTemplate = require("./document");
const nodemailer = require("nodemailer");
const fs = require("fs");
const chromium = require("chrome-aws-lambda")


const sendPdf = async (pathToAttachment, pdf, res) => {
  const attachment = fs.readFileSync(pathToAttachment);

  let transporter = await nodemailer.createTransport({
    // Replace these options with your actual SMTP server details
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: 'admin@primeztrucking.ca',
      pass: 'nqyfyfslpovfjksk',
    }
  });

  const mailOptions = {
    from: "Driver Application Admin <admin@primeztrucking.ca>", // Sender address
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
    } else {
      console.log("Email sent successfully:", info.response);
      res.send(pdf)
      fs.rmSync(pathToAttachment)
      console.log("File deleted")
    }
  });

};



exports.createPdf = async (req, res) => {
  try {
    // chromium.setGraphicsMode = false;
    const browser = await chromium.puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath
    })

    // create a new page
    const page = await browser.newPage()


    // set your html as the pages content
    const html = await pdfTemplate(req.body)
    await page.setContent(html, {
      waitUntil:  ['load', 'domcontentloaded', 'networkidle0']
    })


    const timeStamp = Date.now()
    const filePath = `/tmp/driverApplication-` + timeStamp + `.pdf`

    // or a .pdf file
    const pdf = await page.pdf({
      format: 'A4',
      path: filePath
    })

    await sendPdf(filePath, pdf, res)
    console.log("Browser is not closed")
    await browser.close()
    console.log("Browser closed")

  } catch (err) {
    console.log("Error == ", err)
  }

};


