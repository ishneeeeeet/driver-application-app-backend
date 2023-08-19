const express = require("express");
const env = require("dotenv");
const cors = require("cors");
const pdfRoute = require("./pdfRoutes");
env.config();
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json({limit: '30mb'}));
app.use(express.urlencoded({limit: '30mb'}));
app.use(express.json());
app.use(cors());
app.use(pdfRoute);
app.listen(port, () => console.log(`server is running on port ${port}`));
