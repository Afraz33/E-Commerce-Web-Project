// const session = require('express-session');
// const passport = require('passport');
// //require auth.js
// require('../middleware/auth');

// function isLoggedIn(req, res, next) {
//     req.user ? next() : res.sendStatus(401);
//   }
 

//   const authRoutes = require("express").Router();
//   authRoutes.get('/login', (req, res) => {
//     res.send('<a href="/auth/google">Authenticate with Google</a>');
//   });
 
//   authRoutes.get('/auth/google',
//   passport.authenticate('google', { scope: [ 'email', 'profile' ] }
// ));


// authRoutes.get('/google/callback',
//   passport.authenticate( 'google', {
//     successRedirect: '/protected',
//     failureRedirect: '/auth/google/failure'
//   })
// );

// authRoutes.get('/protected', isLoggedIn,(req, res) => {
   
    
//     res.send("Authenticated");
//   });
  
//   authRoutes.get('/logout', (req, res) => {
//     req.logout();
//     req.session.destroy();
//     res.send('Goodbye!');
//   });
  
//   authRoutes.get('/auth/google/failure', (req, res) => {
//     res.send('Failed to authenticate..');
//   });


//   module.exports =  authRoutes
