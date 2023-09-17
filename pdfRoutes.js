const express = require("express");
const pdfRoute = express.Router();
const { createPdf, fetchPdf, sendPdf } = require("./pdfController");

pdfRoute.post("/createPdf", createPdf); // to generate pdf
// pdfRoute.get("/fetchPdf", fetchPdf); // to generate pdf
// pdfRoute.post("/sendPdf", sendPdf); // send pdf to mail

module.exports = pdfRoute;
