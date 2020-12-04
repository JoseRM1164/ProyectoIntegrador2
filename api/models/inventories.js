const mongoose = require('mongoose');
const {Schema} = mongoose;

let inventoriesSchema = new Schema({
  name: String,
  creationDate: Date,
  descripcion: String,
  uID: String,
});

let inventories = mongoose.model('inventories', inventoriesSchema, 'Inventories')
module.exports = inventories;