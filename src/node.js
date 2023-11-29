//Start the program

// import
const EventEmitter = require("events");
const fs = require("node:fs");

function readPath(pathName) {
  let files = "";
  fs.readdir(pathName, (err, data) => {
    if (err) {
      console.error("There is an error");
      process.exit();
    } else {
      data.filter((string) => {
        const reg = new RegExp(/\.PNG/);
        if (reg.test(string)) {
          console.log("File: " + string);
          files += string + ",";
        }
      });
    }
  });
  return files;
}

function copyFiles(files, sourcePath, targetPath) {
  files = files.split(",");
  files.forEach((file) => {
    let sourceFile = `${sourcePath}/${file}`;
    let targetFile = `${targetPath}/${file}`;

    fs.copyFile(sourceFile, targetFile, (err) => {
      if (err) {
        console.log("Error");
      } else {
        console.log(`Copied file name ${file}`);
      }
    });
  });
  return;
}

function handleInput(data) {
  console.log("Ask me some qustions? or type (exit/quit) to leave the chat.");
  let respons = {
    "what is your name?": "My name is Abdulmohseen's bot",
    "how old are you?": "I am 3 to 4 days old",
    "how are you": "Doing well",
  };
  data = data.toString().trim();
  if (data == "exit" || data == "quit") {
    console.log("Logout.");
    process.stdin.removeListener("data", handleInput);
  } else if (respons[data] != null) {
    console.log(respons[data]);
  } else {
    console.log("I did not understand what you said!");
  }
}

const eventEmitter = new EventEmitter();

function simulateUserLogin(userId) {
  const timestamp = new Date().toLocaleTimeString();
  console.log(`${timestamp}: USER_${userId} logged in`);
  eventEmitter.emit("userLoggedIn", userId, timestamp);
}

function simulateUserLogout(userId) {
  const timestamp = new Date().toLocaleTimeString();
  console.log(`${timestamp}: USER_${userId} logged out`);
  eventEmitter.emit("userLoggedOut", userId, timestamp);
}

eventEmitter.on("userLoggedIn", (userId, timestamp) => {
  console.log(`Event: userLoggedIn - USER_${userId} logged in at ${timestamp}`);
});

eventEmitter.on("userLoggedOut", (userId, timestamp) => {
  console.log(
    `Event: userLoggedOut - USER_${userId} logged out at ${timestamp}`
  );
});

function getRandomUser() {
  return Math.floor(Math.random() * 1000);
}

function simulateRandomUserActivity() {
  const userId = getRandomUser();
  const randomInterval = Math.random() * 1.9 + 0.1;

  setTimeout(() => {
    simulateUserLogin(userId);
    setTimeout(() => {
      simulateUserLogout(userId);
      simulateRandomUserActivity();
    }, randomInterval * 1000);
  }, randomInterval * 1000);
}

function main() {
  // exersice 2
  console.log("Welcom in BE2 exercise, Please enter a path name: ");
  let directory = process.argv[2];
  let newDirectory = process.argv[3];
  let files = readPath(directory);
  // copyFiles(files, directory, newDirectory);

  // exersice 3
  process.stdin.on("data", handleInput);

  // exersice 4
  simulateRandomUserActivity();
}
main();
