let express = require("express");
let router = express.Router();
let passport = require('passport');

router.post("/", passport.authenticate('local'), (req, res, next) => {
  //TODO action to perfom once its login
  console.log('Exito en inicio de sesion'); 
});

module.exports = router;