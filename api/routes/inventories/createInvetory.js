const express = require("express");
const router = express.Router();
const jwt = require('../../config/configJWT');
let inventories = require("../../models/inventories");
let date = new Date();

router.post("/", jwt.checkJWT,async (req, res, next) => {
  let newInventory = new inventories({
    name: req.body.name,
    creationDate: date.now(),
  });
  await newInventory.save();

  return res.status(200).json({
    success: true,
    message: "Creación exitosa",
  });
});

module.exports = router;
