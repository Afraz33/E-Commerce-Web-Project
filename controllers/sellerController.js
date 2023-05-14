const jwt = require("jsonwebtoken");
const Seller = require("../models/sellerModel");

// @desc Set Seller
// @route POST /api/seller/signup
// @access Public
let signup = (req, res) => {
    let { name, password, email, contact, city, province, address } = req.body;
  
    Seller.findOne({}, {}, { sort: { 'sellerId': -1 } }).then((lastSeller) => {
      let newId = 1;
      if (lastSeller) {
        newId = lastSeller.sellerId + 1;
      }
  
      let seller = new Seller({
        name,
        password,
        email,
        contact,
        city,
        province,
        address,
        sellerId: newId,
      });
  
      seller.save().then((newSeller) => {
        res.status(201).json({ message: "Seller created", seller: newSeller });
      }).catch(err => {
        res.status(500).json({ message: "Error creating seller", error: err });
      });
    });
  };
  

// @desc Login Seller
// @route POST /api/seller/login
// @access Login
let login = (req, res) => {
  let { email, password } = req.body;

  Seller.findOne({ email: email }).then((seller) => {
    if (seller && seller.password === password) {
      let token = jwt.sign(
        {
          id: seller._id,
          name: seller.name,
          email: seller.email,
        },
        process.env.SECRET_KEY,
        {
          expiresIn: "24h",
        }
      );
      res.status(200).json({ message: "Login successful", seller: seller, token: token });
    } else {
      res.status(401).json({ message: "Login failed" });
    }
  }).catch(err => {
    console.log(err);
    res.status(500).json({ message: "Login failed", error: err });
  });
};

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
  

// READ - middleware to get a single seller by seller ID
let getSeller = async (req, res) => {
  try {
    const { sellerId } = req.params;

    // find the seller document in MongoDB by seller ID
    const seller = await Seller.findOne({ sellerId });

    if (!seller) {
      return res.status(404).json({ msg: 'Seller not found' });
    }

    res.json(seller);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

// UPDATE - middleware to update a seller by seller ID
let updateSeller = async (req, res) => {
  try {
    const { sellerId } = req.params;
    const { name, email, password, contact, city, province, address } = req.body;

    // find and update the seller document in MongoDB by seller ID
    let seller = await Seller.findOneAndUpdate(
      { sellerId },
      { name, email, password, contact, city, province, address },
      { new: true }
    );

    if (!seller) {
      return res.status(404).json({ msg: 'Seller not found' });
    }

    res.json(seller);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

// DELETE - middleware to delete a seller by seller ID
let deleteSeller = async (req, res) => {
  try {
    const { sellerId } = req.params;

    // find and delete the seller document in MongoDB by seller ID
    let seller = await Seller.findOneAndDelete({ sellerId });

    if (!seller) {
      return res.status(404).json({ msg: 'Seller not found' });
    }

    res.json({ msg: 'Seller deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};


module.exports = {
  signup,
  login,
  getSeller,
  updateSeller,
  deleteSeller,
  DecodeUser,
  CheckIfSeller

};