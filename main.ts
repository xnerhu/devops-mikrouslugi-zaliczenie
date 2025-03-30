import express from "express";

import { formatDate } from "./utils";

const app = express();

app.get("/", (req, res) => {
  res.send(
    `Hello world from <a href="https://github.com/xnerhu/devops-mikrouslugi-zaliczenie">https://github.com/xnerhu/devops-mikrouslugi-zaliczenie</a><br />${formatDate(
      new Date(),
    )}`,
  );
});

const PORT = process.env["PORT"] || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
