const mongoose = require("mongoose");


const sellerSchema = new mongoose.Schema({
  text: { type: String, required: true},
  imageUrl: {type: String},
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" ,required: true},
  
});

module.exports = mongoose.model("seller", sellerSchema);
