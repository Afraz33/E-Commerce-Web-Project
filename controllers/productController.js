const Product = require('../models/prdouctModel.js');
const cloudinary = require('cloudinary').v2;

// Configuration 
cloudinary.config({
    cloud_name: "dqyhy0rd4",
    api_key: "196196768277794",
    api_secret: "7yd1FNl3N9wI-tMm9N3svTbDEXY"
  });


let addProduct = async (req, res) => {
    
    const file = req.files.image;
    //get ProductId from Db and add 1 to it
    Product.findOne({}, {}, { sort: { 'ProductId': -1 } }).then((lastProduct) => {
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
            ProductImage: result.url
    })
    product.save().then((newProduct) => {
        res.status(201).json({ message: "Product created", product: newProduct });
      }).catch(err => {
        res.status(500).json({ message: "Error creating product", error: err });
      });
    })
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
        if (result.nModified > 0) {
          res.status(200).json({ message: "Product updated" });
        } else {
          res.status(404).json({ message: "Product not found" });
        }
      }).catch(err => {
        res.status(500).json({ message: "Error updating product", error: err });
      });
    }


//get all products for a seller
let getAllProducts = async (req, res) => {
    Product.find({ sellerId: req.params.id }).then((products) => {
        res.status(200).json({ products: products });
      }).catch(err => {
        res.status(500).json({ message: "Error getting products", error: err });
      });
    }
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

module.exports = {addProduct, deleteProduct, updateProduct, getAllProducts, getProductById, getProductByName}