const express = require("express");
const app = express();
const hbs = require("hbs");
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public")); //aca le decimos a express que use el dir public para obj estaticos
app.set("view engine", "hbs"); //seteo que el metodo de render en mi app va a ser handlebars
hbs.registerPartials(__dirname + "/views/partials"); // setea carpeta de parciales para reutilizar codigodigo

app.get("/home", (req, res) => {
  res.render("home", {
    nombre: "pole",
  }); //que haga render del home, handlebars permite pasar informacion al sitio dinamico
});

app.get("/index", (req, res) => {
  res.send(`Hola people`);
});

app.post("/", (req, res) => {
  res.send("Hola people desde post");
});

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
