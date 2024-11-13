const express = require("express");
const path = require("path");
const fs = require("fs");
const { type } = require("os");
const exp = require("constants");

const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const server = express();
console.log("server started");

//! Rest Api
//? CRUD API-> create, read, update
server.use(express.json());

//? CREATE API -> POST API
server.post("/products", (req, res) => {
  const body = req.body; // to use this we neeed to attach a parser server.use(express.json());
  console.log(body);
  products.push(body);
  res.sendStatus(201);
});

//* Product
// API Root , base URL,ex- https://kca.com/datascience/  this is base url and then next is api endpoint like /products

//?READ GET API  /PRODUCTS
server.get("/products", (req, res) => {
  res.json(products);
});

//? REad APi get  with id or categories
server.get("/products/:id", (req, res) => {
  const id = Number(req.params.id);

  const p = products.find((p) => {
    return p.id === id;
  });
  // console.log(p);
  res.json(p);
});

//! Update api -> if  we are using put then it overwrite and patch replace only those key that are avlibe is body
//? PUT API FOR UPDATE  KEY
server.put("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const body = req.body;
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.status(201).json(products[productIndex]);
});

//? PATCH API TO CHNAGE  ONLY THESE KEY THAT ARE IN REQ BODY

server.patch("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const body = req.body;
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1, { ...products[productIndex], ...req.body });
  res.status(201).json(products[productIndex]);
});

//? DELETE API
server.delete("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1);
  res.status(201).json(products);
});

server.listen(5001);
