const express=require('express');
const dotenv=require('dotenv');
const cors=require('cors');
const mongoose=require('mongoose');
dotenv.config()

mongoose.connect(process.env.DBURI);

const app=express();
const port=process.env.PORT;

app.use(express.json());
app.use(cors());
app.get("/",(req,res)=>{
    res.send("hello")
})
// app.use("/user",userRoute);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });