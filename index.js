var express = require('express');
var consign = require('consign');
const PORT = 3000;

const app = express();

app.set("json spaces", 4);

//carrega as rotas por meio do modulo consign
consign()
.include("models")
.then("libs/middlewares.js")
.then("routes")
.then("libs/boot.js")
.into(app);
