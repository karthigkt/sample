// const express=require('express');
// const {SERVER_PORT}=require('./config');

import express from "express";
import path from "path";

import {SERVER_PORT} from "./config";

const app = express();


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    // TODO: handle get
    // res.send("Hello World");
    res.render("index");
});

app.listen(SERVER_PORT, () => {
    console.log(`server started on port ${SERVER_PORT}`);
});
