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
// app.use(cors({
//     origin: '*'
// }));
app.use(function(req, res, next) {
    // res.header("Access-Control-Allow-Origin", "*");
    
    const allowedOrigins = ['http://localhost:3000', 'https://driver-application-app.vercel.app'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
         res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-credentials", true);
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
    next();
  });
app.use(pdfRoute);
app.listen(port, () => console.log(`server is running on port ${port}`));
