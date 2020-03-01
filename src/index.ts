import express from "express";
const app = express();
const port: number = 9000;

app.get("/", (req, res) => res.send("ping pong pone"));
app.listen(port);
