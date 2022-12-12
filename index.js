const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const MONGODB_URL = process.env.MONGODB_URL;

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    family: 4
  };

app
.use(express.json())
.use(express.urlencoded({extended: true}))
.use(cors())
.use('/nodepractice', require("./routes"))

mongoose.connect(
    MONGODB_URL, options
)
.then(result => {
    app.listen(PORT, () => {
        console.log('listening on port 5000');
    });
})