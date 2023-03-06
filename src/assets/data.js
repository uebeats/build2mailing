let general = require("./data/general");
let header = require("./data/header");
let body = require("./data/body");
let footer = require("./data/footer");

let data = Object.assign({}, general, header, body, footer);

module.exports = data;