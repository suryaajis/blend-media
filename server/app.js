const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", routes);

app.listen(port, () => {
  console.log("Server listening on port: " + port);
});
