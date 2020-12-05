const express = require("express");
const router = express.Router();
const jwt = require('../../config/configJWT');
const valid = require('../../config/validacion');
let inventories = require("../../models/inventories");

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body.name)
    let validacion = valid.validate('createInv');
    if(validacion){
      let newInventory = new inventories({
        name: req.body.name,
        creationDate: Date.now(),
        descripcion: req.body.descripcion,
        uID: req.body.uID
      });
  
      await newInventory.save();
   
      res.status(200).json({
        success: true,
        message: "Creación exitosa",
      });
    }
    
  } catch (err) {
    console.log(err)
    res.status(400).send(err);
  }

});

module.exports = router;
