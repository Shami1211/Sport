
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

//Routers
const budget_router = require("./routes/budget-routes");


// Middlewares
app.use(express.json());
app.use(cors());
app.use("/budgets", budget_router); // localhost:5000/budgets



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

