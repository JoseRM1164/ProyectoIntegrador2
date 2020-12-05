const express = require("express");
const router = express.Router();
const jwt = require('../../config/configJWT');
const { body, validationResult } = require("express-validator");
let inventories = require("../../models/inventories");

router.post("/", [
  body("name").isString(),
  body("descripcion").isString()
], async (req, res, next) => {
  let errors = validationResult(req);
  if(!errors.isEmpty()) return res.status(400).json({ errors: errors.array()});
  try{
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
  } catch (err) {
    console.log(err)
    res.status(400).send(err);
  }
});

module.exports = router;
