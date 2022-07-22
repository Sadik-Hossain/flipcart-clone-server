const express = require("express");
const app = express();
require("dotenv").config();
const Connection = require("./database/db");
const DefaultData = require("./default");

const PORT = 5001;
const db = process.env.db;
//* db connect
Connection(db);
//* server running
app.listen(PORT, () => console.log(`Server running on ${PORT}`));

//* data saving on db
DefaultData();
