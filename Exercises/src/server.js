const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

// usin normal express

// app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
// res.sendFile(path.join(__dirname + "/index.html"));
// });

// app.get("/src/index.html", (req, res) => {
// res.sendFile(path.join(__dirname + "/index.html"));
// });

// app.get("/src/projects.html", (req, res) => {
// res.sendFile(path.join(__dirname + "/projects.html"));
// });

// app.get("/src/contactMe.html", (req, res) => {
// res.sendFile(path.join(__dirname + "/contactMe.html"));
// });

// app.get("/src/ReachMeOut.html", (req, res) => {
// res.sendFile(path.join(__dirname + "/ReachMeOut.html"));
// });

// routes
//
const checkData = require("./Middleware/checkEnterdData");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

router.get("/src/index.html", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

router.get("/src/projects.html", (req, res) => {
  res.sendFile(path.join(__dirname + "/projects.html"));
});

router.post("/src/contactMe.html", (req, res) => {
  const { fullName, email, phoneNumber } = req.body;
  console.log(fullName + ":" + email);
  app.use(checkData);
  res.redirect("/");
});

router.get("/src/contactMe.html", (req, res) => {
  res.sendFile(path.join(__dirname + "/contactMe.html"));
});

router.get("/src/ReachMeOut.html", (req, res) => {
  res.sendFile(path.join(__dirname + "/ReachMeOut.html"));
});

app.use("/", router);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
