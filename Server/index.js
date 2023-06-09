const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config
const connectDB = require('./config/db')
// const upload = require("express-fileupload")
// const session = require('express-session');
// const passport = require('passport');
const fileupload  = require('express-fileupload')

connectDB()
const app = express()
const port = process.env.PORT || 5000
let cors = require("cors");
// app.use(upload())

app.use(express.json())
app.use(fileupload({
  useTempFiles:true
}))

app.use(cors());
app.use(express.urlencoded({extended:true}))
// app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());

  
 app.use('/Shopistan',require('./routes/sellerRoutes'))
  app.use('/Shopistan',require('./routes/promotionRoutes'))
app.use('/Shopistan',require('./routes/productRoutes'))
app.use('/Shopistan',require('./routes/orderRoutes'))
  // app.use('/',require('./routes/authRoutes'))













  

// app.use('/Shopistan',require('./routes/shippingRoutes'))
// app.use('/Shopistan',require('./routes/prdouctRoutes'))
//  app.use('/GigPilot',require('./routes/userRoutes'))
 
// app.use((error,req, res, next) => {
//     const message = error.field
//     return res.status(500).json({message})
// })
app.listen(port, ()=>{ console.log(`App listening on port ${port}`)

})
