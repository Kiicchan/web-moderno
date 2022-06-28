const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const saudacao = require("./saudacaoMid");
const usuarioApi = require("./api/usuario");
require("./api/produto")(app, "com param!");

app.post("/usuario", usuarioApi.salvar);
app.get("/usuario", usuarioApi.obter);

app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(saudacao("Guilerme"));

app.use((req, res, next) => {
  console.log("Antes");
  next();
});

app.get("/clientes/relatorio", (req, res) => {
  res.send(
    `Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`
  );
});

app.post("/corpo", (req, res) => {
  // let corpo = "";
  // req.on("data", function (parte) {
  //   corpo += parte;
  // });

  // req.on("end", function () {
  //   res.send(corpo);
  // });
  res.send(req.body);
});

app.get("/clientes/:id", (req, res) => {
  res.send(`Cliente ${req.params.id} selecionado`);
});

app.get("/opa", (req, res, next) => {
  console.log("Durante");
  res.json({
    data: [
      { id: 7, name: "Ana", position: 1 },
      { id: 34, name: "CatarAna", position: 2 },
      { id: 73, name: "Anaberga", position: 3 },
    ],
    count: 30,
    skip: 0,
    limit: 3,
    status: 200,
  });
  // res.send("<b>Estou bem!</b>");
  // res.json({
  //   name: "iPad 32Gb",
  //   price: 99.3,
  //   discount: 0.12,
  // });
  // res.json([
  //   { id: 7, name: "Ana", position: 1 },
  //   { id: 34, name: "CatarAna", position: 2 },
  //   { id: 73, name: "Anaberga", position: 3 },
  // ]);

  next();
});

app.use((req, res) => {
  console.log("Depois");
});

app.listen(3000, () => {
  console.log("Backend executando...");
});
