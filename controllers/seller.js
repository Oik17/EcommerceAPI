const { S3Client , PutObjectCommand } = require("@aws-sdk/client-s3");
const dotenv=require('dotenv');
const crypto=require('crypto');
const seller=require("../models/sellerSchema")

dotenv.config()

const randomImageName= (bytes=32)=> crypto.randomBytes(bytes).toString('hex');
const bucketName=process.env.BUCKET_NAME
const bucketRegion=process.env.BUCKET_REGION
const accessKey=process.env.ACCESS_KEY
const secretAccesskey=process.env.SECRET_ACCESS_KEY

const s3= new S3Client({
  region: bucketRegion,
  credentials:{
    accessKeyId:accessKey,
    secretAccessKey: secretAccesskey,
  }})

async function uploadSeller(req,res){
  try{
    console.log("req.file: ",req.file)
    if (!req.file) {
        return res.status(400).send('Image required to sell.');
    }

    const imageName = randomImageName();
    const params = {
        Bucket: bucketName,
        Key: imageName,
        Body: req.file.buffer,
        ContentType: req.file.mimetype,
    };

    const command = new PutObjectCommand(params);
    await s3.send(command);
    const imageUrl = `https://s3-${bucketRegion}.amazonaws.com/${params.Bucket}/${params.Key}`;
    console.log(imageUrl);
    const up= await seller.create({
        item: req.body.text,
        imageUrl: imageUrl,
        description: req.body.description,
        price: req.body.price,

    })
    await up.save();
    console.log(up)
    return res.status(201).send(imageUrl);
  } catch(err){
    console.log(err)
    res.send(err);
  }
}

module.exports={
  uploadSeller
}