const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  let producto = {
    id: 1,
    name: "articulo 1",
  };

  res.send(producto);
});

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
