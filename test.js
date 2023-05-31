const fs = require("fs");

fs.writeFile("example.txt", "Write Text ", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("File created successfully.");
  }
});

fs.appendFile("example.txt", "Append Text", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("File created successfully.");
  }
});

fs.deleteFile("example.txt", "Append Text", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("File created successfully.");
  }
});
