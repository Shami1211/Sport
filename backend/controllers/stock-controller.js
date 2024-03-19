const Stock = require("../model/Stock");

const getAllStocks = async (req,res,next) => {
    let stocks;
    try{
        stocks =await Stock.find();
    }catch(err){
        console.log(err)
    }

    if(!stocks){
        return res.status(404).json({message:"no item found"})
    }
    return res.status(202).json({stocks})
}

const getById = async (req, res, next) => {
    const id = req.params.id;
    let stock;
    try {
      stock = await Stock.findById(id);
    } catch (err) {
      console.log(err);
    }
    if (!stock) {
      return res.status(404).json({ message: "No item found" });
    }
    return res.status(200).json({ stock });
  };
  
  const addStock = async (req, res, next) => {
    const { name,qty,size,date,company,price } = req.body;
    let stock;
    try {
      stock = new Stock({
        
        name,
        qty,
        size,
        date,
        company,
        price
      });
      await stock.save();
    } catch (err) {
      console.log(err);
    }
  
    if (!stock) {
      return res.status(500).json({ message: "Unable To Add" });
    }
    return res.status(201).json({ stock });
  };

exports.getAllStocks = getAllStocks;
exports.addStock = addStock;
exports.getById = getById;
//exports.updateBook = updateBook;
//exports.deleteBook = deleteBook;