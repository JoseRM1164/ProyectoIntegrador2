const express = require("express");
const router = express.Router();
const jwt = require('../../config/configJWT');
const valid = require('../../config/validacion');
let Producto = require("../../models/productos");

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body.name)
    let validacion = valid.validate('createProd');
    if(validacion){
      let newProducto= new Producto({
        name: req.body.name,
        cantindad: req.body.cantindad,
        caducidad: req.body.caducidad,
        precio: req.body.precio,
        invenID: req.body.invenID
      });
  
      await newProducto.save();
   
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
