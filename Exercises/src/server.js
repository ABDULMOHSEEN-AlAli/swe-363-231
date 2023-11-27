const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

// routes
//
// router.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname + "/index.html"));
// });
//
// router.get("/src/index.html", (req, res) => {
//   res.sendFile(path.join(__dirname + "/index.html"));
// });
//
// router.get("/src/projects.html", (req, res) => {
//   res.sendFile(path.join(__dirname + "/projects.html"));
// });
//
//
// router.get("/src/contactMe.html", (req, res) => {
//   res.sendFile(path.join(__dirname + "/contactMe.html"));
// });
//
//
// router.get("/src/ReachMeOut.html", (req, res) => {
//   res.sendFile(path.join(__dirname + "/ReachMeOut.html"));
// });
//
//
//
// app.use("/", router);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
