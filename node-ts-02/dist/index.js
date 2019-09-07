"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express=require('express');
// const {SERVER_PORT}=require('./config');
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const config_1 = require("./config");
const app = express_1.default();
app.set("views", path_1.default.join(__dirname, "views"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
    // TODO: handle get
    // res.send("Hello World");
    res.render("index");
});
app.listen(config_1.SERVER_PORT, () => {
    console.log(`server started on port ${config_1.SERVER_PORT}`);
});
//# sourceMappingURL=index.js.map