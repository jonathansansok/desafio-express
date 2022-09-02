/*   import express from "express";    */
/* import  "./Contenedor.cjs"; 
/* const fs = require("fs"); */
const express = require("express");
const app = express();
const Contenedor = require("./Contenedor.js");

const server = app.listen(8080, () => console.log("server up!!"));

server.on("error", (error) => console.log(`Error con el servidor`));

let numeroAleatorio = 0;
let productoRandom = [];
const fileSystem = new Contenedor("misproductos.json");

const main = async () => {
  const productos = await fileSystem.getAll();

  app.get("/productos", (req, res) => {
    res.json(productos);
  });
  app.get("/productoAleatorio", (req, res) => {
    numeroAleatorio = Math.floor(Math.random() * productos.length) + 1;
    productoRandom = productos.find((prod) => prod.id === numeroAleatorio);
    res.json(productoRandom);
  });
};

main();
