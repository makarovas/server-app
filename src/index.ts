import express from "express";
const app = express();
const port = 9000;

app.get("/", (_req, res) => res.send("ping pong pone"));
app.listen(port);
