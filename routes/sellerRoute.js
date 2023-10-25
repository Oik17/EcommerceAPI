const express = require('express');
const router = express.Router();
const multer=require('multer');

const storage = multer.memoryStorage()
const uploadImage = multer({ storage: storage })

const {uploadSeller}=require('../controllers/seller')
//const {authenticateToken}= require('../middleware/authenticate')

router.get('/test', (req, res) => {
  res.send("hello");
});


router.post('/uploadFile', uploadImage.single("image"), async (req, res) => {
    uploadSeller(req,res);
  });

// router.get('/getData', authenticateToken,async (req,res)=>{
//   getController(req,res)
// })

module.exports=router;    