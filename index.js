import express from "express";
import { createServer } from "http";
import config from "./config.js";

const app = express();

app.get("/", (req, res) => {
  res.type("html");
  res.sendFile("public/index.html", config.sendFile);
});

app.use(express.static("public", { extensions: [".bundle.js"] }));
app.use("/public", express.static("public"));

createServer(app).listen(config.port);
console.log(config.start);
