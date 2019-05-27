const express = require("express");
const path = require("path");
const port = process.env.PORT || 3000;
const app = express();

const publicPath = path.join(__dirname, "../public");
app.use(express.static(publicPath));

app.get("*", (req, res) => {
    res.sendFile("index.html");
});

app.listen(process.env.PORT || 3000, function () {
  console.log('App running on port ' + this.address().port);
});
