const jwt = require("jsonwebtoken");
const Seller = require("../models/sellerModel");


//Checking if a user is logged in
function isLoggedIn(req, res, next) {
   
    req.user ? next() : res.sendStatus(401);
  }

  //decode token
let DecodeUser = (req , res , next)=>{
  let token =  req.headers["authorization"].split(" ")[1];
   
  jwt.verify(token , process.env.SECRET_KEY , (err , decoded)=>{
      if(!err){
          
          req.decoded = decoded;
          
          next();
      }else{
          res.status(403).json({token:token, message:"Not Authorized"})
      }
  }
  )
}


//decode if the user is seller or not
let CheckIfSeller = (req , res , next)=>{
  const email = req.decoded.email;

  Seller.findOne({ email })
    .then(seller => {
      if (seller) {
        // User is a seller
        next();
      } else {
        // User is not a seller
        res.status(403).json({"Message":"Not Authorized as Seller"})
      }
    })
    .catch(err => {
      res.status(500).json({"Message":"Error checking if user is seller", err: err})
    });
}

  module.exports = {isLoggedIn, DecodeUser, CheckIfSeller};


