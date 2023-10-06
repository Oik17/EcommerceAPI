const { S3Client , PutObjectCommand } = require("@aws-sdk/client-s3");
const dotenv=require('dotenv');
const crypto=require('crypto');

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
