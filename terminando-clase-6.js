const express = require("express");

const app = express();

const server = app.listen(8080, () => console.log("server up"));
server.on("error", (error) => console.log(`Error en servidor ${error}`));

app.get("/", (request, response) => {
  response.send('<h1 style="color: blue">Bienvenidos al servidor express</h1>');
});

app.get("/productos", (request, response) => {
  //accedio a la db
  //verifico quien esta logueado
  //leyo el username y la foto
  //hacer un find que devulveun poroducto que devuelve al azar 
  let productosArray = [
    {
      "title": "Escuadra",
      "price": 123.45,
      "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
      "id": 1
    },
    {
      "title": "Calculadora",
      "price": 234.56,
      "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
      "id": 2
    },
    {
      "title": "Globo Terráqueo",
      "price": 345.67,
      "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
      "id": 3
    }
   ]
   
  response.send({
    status: "sucess",
    products: productosArray,

  });
});

let visitas = 0;

app.get("/visitas2", (request, response) => {
  //accedio a la db
  //verifico quien esta logueado
  //leyo el username y la foto
  visitas++;
  response.send(`visitas2 ${visitas}`);

});

app.get("/fyh", (request, response) => {
  //accedio a la db ya veremos
  //verifico quien esta logueado
  //leyo el username y la foto
  let dia = new Date();
  response.send({
    fyh: dia,
  });
});
