const express = require("express");
const app = express();
const { formatDate } = require("./utils.js");

app.get("/", (req, res) => {
  res.send(
    `Hello world from <a href="https://github.com/xnerhu/devops-mikrouslugi-zaliczenie">https://github.com/xnerhu/devops-mikrouslugi-zaliczenie</a><br />${formatDate()}`
  );
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
