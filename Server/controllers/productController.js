const Product = require('../models/prdouctModel.js');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const multer = require('multer');

const storage = multer.diskStorage({
    destination:(req , file , cb)=>{
        
        cb(null , './content')
    },
    filename:(req , file , cb)=>{
        cb(null ,Date.now()+file.originalname)
    }
})


const filter = (req , file , cb)=>{
    if(file.mimetype == 'application/jpeg' || file.mimetype == 'image/jpeg' || file.mimetype == 'image/png '){
        cb(null , true)
    }else{
        cb(new Error("UnSupported file") , false)
    }
}


const upload = multer({
   storage:storage,
   fileFilter:filter,
    limits:1024*1024*10
})

// Configuration 
cloudinary.config({
    cloud_name: "dqyhy0rd4",
    api_key: "196196768277794",
    api_secret: "7yd1FNl3N9wI-tMm9N3svTbDEXY"
  });


//Add a product
let addProduct = async (req, res) => {
    console.log(req.body)
    const file = req.files.image;
    console.log(file)
    //get ProductId from Db and add 1 to it
    const lastProduct = await Product.findOne({}, {}, { sort: { 'ProductId': -1 } });
        let newId = 1;
        if (lastProduct) {
          newId = lastProduct.ProductId + 1;
        }
    cloudinary.uploader.upload(file.tempFilePath, function(err, result) {
        product = new Product({
            ProductId: newId,
            sellerId: req.body.sellerId,
            ProductName: req.body.ProductName,
            ProductType: req.body.ProductType,
            ProductDescription: req.body.ProductDescription,
            ProductPrice: req.body.ProductPrice,
            Discount: req.body.Discount,
            ProductImage: result.url,
            ProductQuantity: req.body.ProductQuantity
    })
    product.save().then((newProduct) => {
        res.status(201).json({ message: "Product created", product: newProduct });
      }).catch(err => {
        res.status(500).json({ message: "Error creating product", error: err });
      });
    })
}


//delete product
let deleteProduct = async (req, res) => {
    Product.deleteOne({ ProductId: req.params.id }).then((result) => {
        if (result.deletedCount > 0) {
          res.status(200).json({ message: "Product deleted" });
        } else {
          res.status(404).json({ message: "Product not found" });
        }
      }).catch(err => {
        res.status(500).json({ message: "Error deleting product", error: err });
      });
    }

//update product
let updateProduct = async (req, res) => {
  
    Product.updateOne({ ProductId: req.params.id }, {
        ProductId: req.body.ProductId,
        sellerId: req.body.sellerId,
        ProductName: req.body.ProductName,
        ProductType: req.body.ProductType,
        ProductDescription: req.body.ProductDescription,
        ProductPrice: req.body.ProductPrice,
        Discount: req.body.Discount,
        ProductImage: req.body.ProductImage
    }).then((result) => {
        
          res.status(200).json({ message: "Product updated" });
        
      }).catch(err => {
        res.status(500).json({ message: "Error updating product", error: err });
      });
    }


//get all products for a seller
let getAllProducts = async (req, res) => {
  try {
    const sellerId = req.params.sellerId;
    
    // find all promotions with the specified seller ID
    const products = await Product.find({ sellerId });

    if (!products) {
      return res.status(404).json({ msg: 'products not found' });
    }

    // extract the promotion codes from the promotion documents
    else {

    res.json({ products });}

  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};



//get product by id
let getProductById = async (req, res) => {
    Product.findOne({ ProductId: req.params.id }).then((product) => {
        if (product) {
          res.status(200).json({ product: product });
        } else {
          res.status(404).json({ message: "Product not found" });
        }
      }).catch(err => {
        res.status(500).json({ message: "Error getting product", error: err });
      });
    }



//get product by name
let getProductByName = async (req, res) => {
    Product.findOne({ ProductName: req.params.name }).then((product) => {
        if (product) {
          res.status(200).json({ product: product });
        } else {
          res.status(404).json({ message: "Product not found" });
        }
      }).catch(err => {
        res.status(500).json({ message: "Error getting product", error: err });
      });
    }

module.exports = {addProduct, deleteProduct, updateProduct, getAllProducts, getProductById, getProductByName,upload}