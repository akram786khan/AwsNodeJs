const express = require("express");
const app = express();

app.get("/my", (req, res) => {
    res.send("Hello akram khan....")
})

app.listen(8000);