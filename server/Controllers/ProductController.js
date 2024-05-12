const express = require("express");
const app = express();
const cors = require('cors');
const Products = require('../models/Products');
const dotenv = require('dotenv');
var store = require('store');
const multer = require("multer");
var path = require('path');
const bodyParser = require('body-parser');


dotenv.config();
app.use(cors());

require('dotenv').config();

app.set("view engine", "ejs");
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

app.use(express.static(path.join(__dirname, 'uploads')));
app.use(express.static('public'));

// const jsonParser = bodyParser.json({ extended: false });

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ parameterLimit:50000, extended: true, limit: '50mb' })); 


  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      console.log(req.file);
      const uniqueSuffix = Date.now();
      cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
    }
  });
  
  const upload = multer({ storage: storage });


const ProductRegistry = async (req, res) =>{
  const { productID, productCategory,avatar, productName, productDescription, price, productImages , stockAvailability, productReviews} = req.body;
    try{
      let product = await Products.findOne({productName});
      if(product){
        res.json("Products Already exists");
      }
      else{
            const avatar = gravatar.url(email, {
                s:'200',
                r: 'pg',
                d:'mm'
            });

            product = new Products({ productID, productCategory, avatar, productName, productDescription, price, productImages , stockAvailability, productReviews});
            await product.save();
            res.json(product);
            console.log(`Signup token: ${product}`)
    }
    
    } catch (err) {
      console.error(err.message)
      res.json('An error occurred');
    }
};

const ProductDisplay = async (req, res) => {
  Products.find()
  .then(product => res.json(product))
};

const ProductDelete = async (req, res) => {
    try {
      const productID = req.params.id;
      const productDelete = await Products.findByIdAndDelete(productID);
      
      if (!productDelete) {
        return res.status(404).json({ error: 'Products not found' });
      }
      
      res.json({ message: 'Products deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  const ProductSearch = async (req, res) => {
    const productID = req.params.id;
  
    try {
      const product = await Products.findById(productID);
      if (!product) {
        return res.status(404).json({ error: 'Products not found' });
      }
      return res.json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
const ProductUpdate =  async (req, res) => {
   
      let product = await Products.updateOne(
        { _id : req.params.id}, 
        { $set: req.body  }
      )
     res.send({ result });
  };

  module.exports = { ProductRegistry, ProductDisplay, ProductDelete, ProductSearch, ProductUpdate }