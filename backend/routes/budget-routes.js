
const express = require("express");
const router = express.Router();
const Stock = require("../model/Stock");
const stockController = require("../controllers/stock-controller");

router.get("/", );

router.get("/", stockController.getAllStocks);
router.post("/",stockController.addStock );
router.get("/:id",stockController.getById );
//router.put("/:id", stockController.updateBook);
//router.delete("/:id", stockController.deleteBook);

module.exports = router;
