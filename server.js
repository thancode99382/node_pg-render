const express = require("express");
const bodyParser = require("body-parser");
const pool = require("./db");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Home page - List products
app.get("/", async (req, res) => {
  const result = await pool.query("SELECT * FROM products ORDER BY id ASC");
  res.render("index", { products: result.rows });
});

// Create form
app.get("/create", (req, res) => {
  res.render("create");
});

// Create product
app.post("/create", async (req, res) => {
  const { name, price } = req.body;
  await pool.query("INSERT INTO products (name, price) VALUES ($1, $2)", [name, price]);
  res.redirect("/");
});

// Edit form
app.get("/edit/:id", async (req, res) => {
  const result = await pool.query("SELECT * FROM products WHERE id=$1", [req.params.id]);
  res.render("edit", { product: result.rows[0] });
});

// Update product
app.post("/edit/:id", async (req, res) => {
  const { name, price } = req.body;
  await pool.query("UPDATE products SET name=$1, price=$2 WHERE id=$3", [name, price, req.params.id]);
  res.redirect("/");
});

// Delete product
app.get("/delete/:id", async (req, res) => {
  await pool.query("DELETE FROM products WHERE id=$1", [req.params.id]);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
