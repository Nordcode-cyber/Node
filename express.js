const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
setTimeout(() => {
  console.log("First");
}, 1000);
setTimeout(() => {
console.log("Second");
},2000);
setTimeout(() => { //function arrow
console.log("Third");
}, 3000);

