const express = require("express");
const app = express();
const checkData = require("./Middleware/checkEnterdData");

let information = {};
function submitForm() {
  console.log("pop");
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const message = document.getElementById("message").value;

  information = { fullName, email, phoneNumber, message };
}

app.use(checkData, information);
