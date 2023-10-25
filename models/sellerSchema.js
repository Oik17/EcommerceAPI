const mongoose = require("mongoose");


const sellerSchema = new mongoose.Schema({
  item: { type: String, required: true},
  imageUrl: {type: String},
  description: {type: String, required: true},
  price: {type: Number, required: true},
  //user: { type: mongoose.Schema.Types.ObjectId, ref: "user"},
  });

module.exports = mongoose.model("seller", sellerSchema);
