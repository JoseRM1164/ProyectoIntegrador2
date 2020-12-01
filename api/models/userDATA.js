const mongoose = require('mongoose');
const { Schema } = mongoose;

let userDATASchema = new Schema({
  name: String,
  lastName: String,
  uID: String 
});

let userDATA = mongoose.model('userDATA', userDATASchema, 'userDATA');
module.exports = userDATA;