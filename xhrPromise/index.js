const http = require("http");
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const router = require("./routers/router");
const port = 3002;

app.use(express.static(path.join(__dirname,"public")));
app.use('/get',router);

http.createServer(app).listen(port, () => console.log(`Server hosted at ${port}`));
