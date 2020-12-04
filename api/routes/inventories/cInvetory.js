const express = require("express");
const router = express.Router();
let inventories = require("../../models/inventories");
let date = new Date();

router.post("/", async (req, res, next) => {
  if (req.user) {
    let newInventory = new inventories({
      name: req.body.name,
      creationDate: date.now(),
    });
    await newInventory.save();

    return res.status(200).json({
      success: true,
      redirectUrl: "/succesCreationInventory",
    });
  } else {
    return res.status(401).json({
      success: false,
      redirectUrl: "/login",
    });
  }
});

module.exports = router;
