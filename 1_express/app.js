const express = require("express");
const app = express();
// console.log(app);

app.get("/home/dash", (req, res) => {
  res.send("<h1>Get Req..,hello</h1>");
  console.log(req.url);
  // console.log("Hello");
});
app.post("/home/insert", (req, res) => {
  res.send("<h1>Post Req..,hello</h1>");
  console.log(req.url);
  // console.log("Hello");
});

app.listen(8800, () => {
  console.log(`Server start at port ${8800} `);
});
