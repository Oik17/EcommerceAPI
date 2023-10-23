const mongoose = require("mongoose");


const buyerSchema = new mongoose.Schema({
  text: { type: String, required: true},
  imageUrl: {type: String},
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" ,required: true},
  
});

module.exports = mongoose.model("buyer", buyerSchema);
