const express = require("express");
const router = require("./routes/route");
const cors = require("cors");
const app = express();

require("dotenv").config();
const Connection = require("./database/db");
const DefaultData = require("./default");

//* middleware + routes
app.use(cors());
app.use(express.json());
app.use("/", router);

//* root get endpoint
app.get("/", (req, res) => {
  res.send(`hello`);
});

const PORT = 5001;

//* db connect
const db = process.env.db;
Connection(db);

//* server running
app.listen(PORT, () => console.log(`Server running on ${PORT}`));

//* data saving on db
DefaultData();
