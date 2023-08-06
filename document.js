module.exports = ({name}) => {
    const today = new Date()
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PDF Form</title>
</head>
<body>
  <h1>PDF Form</h1>
  <form id="pdfForm">
    <label for="name">Name: ${name}</label>
    <input type="text" id="name" name="name" required><br>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required><br>

    <label for="message">Message:</label><br>
    <textarea id="message" name="message" required></textarea><br>

    <button type="button" onclick="generatePDF()">Generate PDF</button>
  </form>
  </body>
</html>
    `
}