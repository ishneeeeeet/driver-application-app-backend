const pdfTemplate = require("./document");
const nodemailer = require("nodemailer");
const fs = require("fs");
const chromium = require("@sparticuz/chromium")
const puppeteer = require("puppeteer-core")



const sendPdf = async (pathToAttachment) => {
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
      fs.rmSync(pathToAttachment)
      console.log("File deleted")
    }
  });

};



exports.createPdf = async (req, res) => {
  try {
    chromium.setGraphicsMode = false;
    const browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
      ignoreHTTPSErrors: true,
    })

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

    await res.send(pdf)
    await browser.close()
    console.log("Browser closed")
    await sendPdf(filePath)

  } catch (err) {
    console.log("Error == ", err)
  }

};


