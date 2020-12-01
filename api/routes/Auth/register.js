const express = require("express");
let router = express.Router();
let userAUTH = require("../../models/userAUTH");
let userDATA = require("../../models/userDATA");
const bcrypt = require("bcryptjs");

router.post("/", (req, res, next) => {
  userAUTH.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("Usuario ya existe");
    if (!doc) {
      const hashPwd = await bcrypt.hash(req.body.password, 10);
      let newUser = new userAUTH({
        username: req.body.username,
        passwordHash: hashPwd,
      });
      await newUser.save();
      userAUTH.findOne({ username: req.body.username }, async (err, user) => {
        if (err) throw err;
        if (user) {
          let id = user._id;
          let newUserDATA = new userDATA({
            name: req.body.name,
            lastName: req.body.lastName,
            uID: id
          });
          await newUserDATA.save();
        }
      });
      return res.status(200).json({
        success: true,
        redirectUrl: "/login",
      });
    }
  });
});

module.exports = router;
