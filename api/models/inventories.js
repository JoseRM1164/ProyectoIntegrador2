const mongoose = require('mongoose');
const {Schema} = mongoose;

let inventoriesSchema = new Schema({
  name: String,
  creationDate: Date,
  uID: String,
  products: [Schema.Types.Mixed]
});

let inventories = mongoose.model('inventories', inventoriesSchema, 'Inventories')
module.exports = inventories;