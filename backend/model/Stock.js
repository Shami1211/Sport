const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const stockSchema = new Schema({ 

      date: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      deposit: {
        type: Number,
        required: true,
      }, 
      exprend: {
        type: Number,
        required: true,
      }, 
      saving: {
        type: Number,
        required: true,
      }, 

})

module.exports = mongoose.model("Stock", stockSchema);