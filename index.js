var express = require('express');
var consign = require('consign');
const PORT = 3000;

const app = express();

app.set("json spaces", 4);

//carrega as rotas por meio do modulo consign
consign()
.include("routes")
.into(app);

app.listen(PORT, () => console.log("app-nodejs = porta ${PORT}"));
