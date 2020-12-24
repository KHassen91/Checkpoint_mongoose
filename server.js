const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();

mongoose.connect(process.env.DB_Connection),
  { useNewUrlParser: true, useUnifiedTopology: true },
  (er) => {
    if (er) {
      console.log(er);
    } else console.log("connected");
  };

let Person = require("./model/person");
app.use(express.json);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
