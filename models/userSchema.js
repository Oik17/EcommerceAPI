const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    email: {
        type: String,
         required: true
    },
    password: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String
    },
    typeOf:{
        type: String,
        enum: ['buyer','seller'],
        default: 'buyer',
    },
    seller: [{ type: mongoose.Schema.Types.ObjectId, ref: "seller" }],
    buyer: [{ type: mongoose.Schema.Types.ObjectId, ref: "buyer" }],
    

})

module.exports=mongoose.model("user",userSchema)