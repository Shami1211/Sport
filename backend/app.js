
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

//Routers
const budget_router = require("./routes/stock-routes");


// Middlewares
app.use(express.json());
app.use(cors());
app.use("/stocks", stock_router); // localhost:5000/stocks



//68SvVjBKSYPNzckf
mongoose
  .connect(
    "mongodb+srv://admin:68SvVjBKSYPNzckf@cluster0.e5amjlq.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  }) 
  .catch((err) => console.log(err));

