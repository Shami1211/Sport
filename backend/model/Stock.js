const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const stockSchema = new Schema({ 

      
      name: {
        type: String,
        required: true,
      },
      qty: {
        type: Number,
        required: true,
      }, 
      size: {
        type: Number,
        required: true,
      }, 
      date: {
        type: String,
        required: true,
      },
      company: {
        type: String,
        required: true,
      }
      ,
      price: {
        type: Number,
        required: true,
      }, 

})

module.exports = mongoose.model("Stock", stockSchema);