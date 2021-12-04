require("dotenv").config();

const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 5000
app.use(express.json())

mongoose
.connect(process.env.MONGODB)
.then(() => console.log("db connected"));

const companyroute = require('./routes/company');
const productroute = require('./routes/product');
const sellerroute = require('./routes/seller');

app.get('/', (req, res) => res.send('Express APIs'));

app.use("/company",companyroute);
app.use("/product",productroute);
app.use("/seller",sellerroute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))